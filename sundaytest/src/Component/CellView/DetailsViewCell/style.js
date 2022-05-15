import React from 'react';
import {StyleSheet} from 'react-native';
import { deviceBasedDynamicDimension } from '../../../Utils/ApplicationSpace';
const style=StyleSheet.create({

    mainView:{
      flex:1,
        // backgroundColor:'pink',
        maxHeight:deviceBasedDynamicDimension(80,true,1),
        minHeight:deviceBasedDynamicDimension(50,true,1),
        margin:deviceBasedDynamicDimension(10,true,1),
        
        justifyContent:'center',
        alignItems:'flex-start',
        alignContent:'center',
   
        // width:'100%'

    },
    textstyleName:{
        fontSize:deviceBasedDynamicDimension(18,true,1),
        lineHeight:deviceBasedDynamicDimension(20,true,1),
        height:deviceBasedDynamicDimension(50,true,1),
        // height:deviceBasedDynamicDimension(26,true,1),
        color:"black",
        alignSelf:'center',
        // height:'100%',
        alignContent:'center',
        fontWeight:'bold',
        alignSelf:'center',
        margin:deviceBasedDynamicDimension(10,true,1),
        width:'100%',
        textAlign:'center',
        textAlignVertical:'center',
        justifyContent:'center',
        // paddingHorizontal:deviceBasedDynamicDimension(10,true,1),
        // flex:1,
        // backgroundColor:'red',
       

    }

})

export default style;
