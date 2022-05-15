import React, { useState } from 'react';
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
const Index = (props) => {

    const [Visible, setVisible] = useState(false);
    const [status, setstatus] = React.useState(false);
    const [Data, setData] = useState([]);
    const [Error, setError] = useState("");
    const [NextUrl, setNextUrl] = useState("");
    const [isRefreshpage, setisRefreshpage] = useState(false);

    React.useEffect(() => {
        ApiCall(GetHomeUrl(), true);
    }, []);

    const ApiCall = (url = "", bool = false) => {

        if (bool) {
            setVisible(true)
        }
        onCallget(url, (response) => {
            console.log("response ", response)
            if (response.success === true) {

                if (response?.data?.results?.length > 0) 
                {
                    if(bool==true)
                    {
                        setData(response?.data?.results)
                    }else if(bool==false){
                        let temp= Data=>[...Data,...response?.data?.results];
                        setData(temp)
                    }
                    
                }
                setNextUrl('')
                if (isNull(response?.data?.next)) 
                {
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
                    Data?.length > 0  && Visible==false &&
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        maxToRenderPerBatch={40}
                        
                        style={{ flex: 1, backgroundColor: 'white' }}
                        // keyExtractor={({index,item}) => {
                        //     console.log("index.toString()+item?.name ",item)
                        //     return index+item?.name
                        // }}
                        keyExtractor={(item, index) => { return index.toString() + item?.name   }}
                        ListFooterComponent={isRefreshpage ==true ?(<FlatListRefreshView></FlatListRefreshView>):null}
                        onEndReachedThreshold={1}
                        onEndReached={(distance)=>{
                            if(isNull(NextUrl)==true && isRefreshpage==false)
                            {
                                setisRefreshpage(true)
                                ApiCall(NextUrl,false)
                            }
                        }}
                        data={Data}
                        renderItem={({ item, index }) => {
                            return (<DetailsViewCell item={item}></DetailsViewCell>)
                        }}
                    >

                    </FlatList>
                }

                {
                    Visible == false && Data.length === 0 &&
                    <NoDataAvailable></NoDataAvailable>
                }
            </View>
        </SafeAreaView>
    )
}


export default Index;
