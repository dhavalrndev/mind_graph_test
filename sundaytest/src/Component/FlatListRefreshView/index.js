import React from 'react';
import {View,Text,StyleSheet ,ActivityIndicator} from 'react-native';
import { isNull } from '../../Utils';
// import { deviceBasedDynamicDimension } from '../../../Util/ApplicationSpace';
// import { primary_color } from '../../../Util/Colors';
// import { Muli_Bold } from '../../../Util/Fonts';
import { deviceBasedDynamicDimension } from '../../Utils/ApplicationSpace';
const index=(props)=>{

    return (
        <View style={style.mainView}>
                <ActivityIndicator  animating={true}  size="small" color={"green"} />
            <Text style={style.textView}>{isNull(props?.title)?props?.title:"Loading ..."}</Text>
        </View>
    )
}

const style=StyleSheet.create({
    mainView:{
            height:deviceBasedDynamicDimension(50,true,1),
            width:'100%',
            justifyContent:'center',
            flexDirection:'row',
            justifyContent:'center',
            alignContent:'center',
            backgroundColor:'white',
            maxHeight:deviceBasedDynamicDimension(50,true,1),
    },
    textView:{
        // fontFamily:Muli_Bold,
        color:'black',
        fontSize:deviceBasedDynamicDimension(14,true,1),
        lineHeight:deviceBasedDynamicDimension(16,true,1),
        marginHorizontal:deviceBasedDynamicDimension(16,true,1),
        alignSelf:'center',
    },
  
})
export default index
