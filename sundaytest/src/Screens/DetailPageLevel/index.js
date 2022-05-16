import React, { useState, useLayoutEffect, } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import style from './style';
import Loader from '../../Component/Loader';
import NoDataAvailable from '../../Component/NoDataAvailable';
import { isNull } from '../../Utils';
import { label_data_some_thing_is_wrong } from '../../Utils/strings';
import { GetHomeUrl } from '../../Api/Webservices';
import { onCallget } from '../../Api/Webservices/ApiHelper';
import DetailsViewCell from '../../Component/CellView/DetailsViewCellLevel';
import FastImage from 'react-native-fast-image';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

import SearchView from '../../Component/SearchView'
const Index = ({ navigation, route }) => {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };
    const [GraphData, setGraphData] = useState([])
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => "#000000",
        // color:"#FFFFFF",
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.9,
        useShadowColorFromDataset: false // optional
    };

    const [Visible, setVisible] = useState(false);
    const [status, setstatus] = React.useState(false);
    const [Data, setData] = useState({});
    const [Error, setError] = useState("");


    React.useEffect(() => {

        if (isNull(route.params.data?.url)) {
            setVisible(true)
            ApiCall(route.params.data?.url);
        }
    }, []);


    React?.useLayoutEffect(() => {

        navigation?.setOptions({
            title: route.params.data.name,
            backtitle: ''
        })

    }, [])

    // const change = (text) => {
    //     setSearch(text)
    //     console.log(" hi ", text)
    //     if (isNull(text) == true) {
    //         // console.log(" match ")
    //         let result = Data?.filter((item) => {
    //             console.log(" match ", item?.name)
    //             let name = item?.name?.toLowerCase();
    //             if (name.includes(text.toLowerCase())) {
    //                 console.log(" match ", item?.name)
    //                 return item
    //             } else {
    //                 console.log(" no  match ")
    //                 // return item
    //             }
    //         })
    //         console.log("result---", result?.length)
    //         setSearchData(result);
    //     } else {
    //         setSearchData([])
    //         console.log(" no  match +--")
    //     }
    // }
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerTitle: props => <SearchView
    //             change={(text) => {
    //                 change(text)
    //             }}
    //             title={' test message'}  {...props} />
    //     })
    // }, [])

    const ApiCall = (url) => {

        setVisible(true)
        onCallget(url, (response) => {
            console.log("response ", response);
            setVisible(false);

            if (response.success === true) {

                if (isNull(response?.data) == true) {
                    setData(response?.data)

                    const label=[]
                    const data=[]
                    response?.data?.stats?.map((item)=>{
                        label.push(item?.stat?.name);
                        data.push(item?.base_stat);
                    })

/*  datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }*/
                    const newData={labels:label,datasets:[{data:data}]};
                    setGraphData(newData)
                    console.log(" push ",newData)
                }   

        //      labels: ["January", "February", "March", "April", "May", "June"],
            } else {
                if (isNull(response.message) == true) {
                    setError(response.message)
                } else {
                    setError(label_data_some_thing_is_wrong)
                }
            }



        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.MainView}>
                <Loader visible={Visible}></Loader>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>


                        {
                            isNull(Data?.sprites?.front_default) == true &&
                            <FastImage
                                source={{ uri: Data?.sprites?.front_default }}
                                style={style.fastImageVIewStyle}>

                            </FastImage>
                        }
                        {
                            Data?.stats?.length > 0 && Visible == false &&
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                maxToRenderPerBatch={40}
                                style={{ flex: 1, backgroundColor: 'white' }}
                                keyExtractor={(item, index) => { return index.toString() + item?.name }}

                                extraData={Data?.stats}
                                data={Data?.stats}
                                renderItem={({ item, index }) => {
                                    return (<DetailsViewCell item={item}></DetailsViewCell>)
                                }}
                            >
                            </FlatList>
                        }

                        {
                            GraphData?.labels?.length > 0 &&
                            <BarChart
                                style={style.graphStyle}
                                data={GraphData}
                                width={Dimensions.get('screen').width - 40}
                                height={220}
                                yAxisLabel="$"
                                chartConfig={chartConfig}
                                verticalLabelRotation={30}
                            />
                        }


                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}


export default Index;
