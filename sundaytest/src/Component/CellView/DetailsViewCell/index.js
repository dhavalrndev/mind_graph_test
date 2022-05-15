import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { isNull } from '../../../Utils';
import Card from '../../Card'
import style from './style';
const Index = (props) => {

    const [Name,setName]=React.useState("");
    React.useEffect(()=>{
            if(isNull(props?.item?.name))
            {
                setName(props?.item?.name)
            }
    },[]);

    return (
        <Card style={style.mainView}>
            <View style={{flex:1}}>
                  <TouchableOpacity style={{flex:1}}>
                  <Text style={style.textstyleName}>{Name}</Text>
                  </TouchableOpacity>
            </View>
        </Card>
    )
}

export default Index;