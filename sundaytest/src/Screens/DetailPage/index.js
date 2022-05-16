import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import style from './style';
import Loader from '../../Component/Loader';
import NoDataAvailable from '../../Component/NoDataAvailable';
import { isNull } from '../../Utils';
import { label_data_some_thing_is_wrong } from '../../Utils/strings';
import { GetHomeUrl } from '../../Api/Webservices';
import { onCallget } from '../../Api/Webservices/ApiHelper'
import DetailsViewCell from '../../Component/CellView/DetailsViewCell'
import FlatListRefreshView from '../../Component/FlatListRefreshView';
import SearchView from '../../Component/SearchView'
import { ScreenNameHomeDetailsPageLevel } from '../../Route/ScreenNames';
const Index = ({ navigation, route }) => {

    const [Visible, setVisible] = useState(false);
    const [status, setstatus] = React.useState(false);
    const [Data, setData] = useState([]);
    const [Error, setError] = useState("");
    const [NextUrl, setNextUrl] = useState("");
    const [isRefreshpage, setisRefreshpage] = useState(false);
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);

    React.useEffect(() => {
        ApiCall(GetHomeUrl(), true);
    }, []);


    const NoDataAvailableView = () => {
        return (
            <View style={{ height: 150, backgroundColor: 'white', justifyContent: 'center' }}>
                <NoDataAvailable></NoDataAvailable>
            </View>
        )
    }

    const change = (text) => {

        console.log(" hi ", text)
        if (isNull(text) == true) {
            // console.log(" match ")
            let result = Data?.filter((item) => {
                console.log(" match ", item?.name)
                let name = item?.name?.toLowerCase();
                // console.log(" name ",name)
                if (name.includes(text.toLowerCase())) {
                    console.log(" match ", item?.name)
                    return item
                } else {
                    console.log(" no  match ")
                    // return item
                }
            })
            console.log("result---", result?.length)
            setSearchData(result);
        } else {
            setSearchData([])
            console.log(" no  match +--")
        }

    }

    // React.useEffect(() => {
    //     change();
    // }, { search })


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: props => <SearchView
                change={(text) => {
                    change(text);
                    setSearch(text)
                }}
                title={' test message'}  {...props} />
        })
    }, [search])

    const ApiCall = (url = "", bool = false) => {

        if (bool) {
            setVisible(true)
        }
        onCallget(url, (response) => {
            console.log("response ", response)
            if (response.success === true) {

                if (response?.data?.results?.length > 0) {
                    if (bool == true) {
                        setData(response?.data?.results)
                    } else if (bool == false) {
                        let temp = Data => [...Data, ...response?.data?.results];
                        setData(temp)
                    }

                }
                setNextUrl('')
                if (isNull(response?.data?.next)) {
                    setNextUrl(response?.data?.next);
                }
                setisRefreshpage(false)
            } else {
                if (isNull(response.message) == true) {
                    setError(response.message)
                } else {
                    setError(label_data_some_thing_is_wrong)
                }
            }
            if (bool) {
                setVisible(false)
            }
        })

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.MainView}>

                <Loader visible={Visible}></Loader>

                {
                    Data?.length > 0 && Visible == false && isNull(search) == false &&
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        maxToRenderPerBatch={40}
                        style={{ flex: 1, backgroundColor: 'white' }}
                        keyExtractor={(item, index) => { return index.toString() + item?.name }}
                        ListFooterComponent={isRefreshpage == true ? (<FlatListRefreshView></FlatListRefreshView>) : null}
                        onEndReachedThreshold={1}
                        onEndReached={(distance) => {
                            if (isNull(NextUrl) == true && isRefreshpage == false && searchData?.length == 0) {
                                setisRefreshpage(true)
                                ApiCall(NextUrl, false)
                            }
                        }}
                        extraData={searchData?.length > 0 ? searchData : Data}
                        data={searchData?.length > 0 ? searchData : Data}
                        renderItem={({ item, index }) => {
                            return (<DetailsViewCell
                                onClick={(item) => {
                                    navigation?.navigate(ScreenNameHomeDetailsPageLevel, { data: item })

                                }}
                                item={item}></DetailsViewCell>)
                        }}
                    >

                    </FlatList>
                }



                {/*  Manage Visiblility for search data only  */}
                {
                    searchData?.length > 0 && Visible == false &&
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        maxToRenderPerBatch={40}
                        style={{ flex: 1, backgroundColor: 'white' }}
                        keyExtractor={(item, index) => { return index.toString() + item?.name }}
                        ListFooterComponent={isRefreshpage == true ? (<FlatListRefreshView></FlatListRefreshView>) : null}
                        onEndReachedThreshold={1}
                        // onEndReached={(distance) => {
                        //     if (isNull(NextUrl) == true && isRefreshpage == false && searchData?.length == 0) {
                        //         setisRefreshpage(true)
                        //         ApiCall(NextUrl, false)
                        //     }
                        // }}
                        extraData={searchData}
                        data={searchData}
                        renderItem={({ item, index }) => {
                            return (<DetailsViewCell 
                                onClick={(item) => {
                                    navigation?.navigate(ScreenNameHomeDetailsPageLevel, { data: item })

                                }}
                                item={item}></DetailsViewCell>)
                        }}
                    >

                    </FlatList>
                }

                {
                    Visible == false && Data.length === 0 &&
                    <NoDataAvailableView />


                }

                {
                    Visible == false && searchData.length === 0 && isNull(search) == true &&
                    <NoDataAvailableView>

                    </NoDataAvailableView>
                }
            </View>
        </SafeAreaView>
    )
}


export default Index;
