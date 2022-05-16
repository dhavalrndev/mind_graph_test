import React from 'react';
import {StyleSheet} from 'react-native';
import { deviceBasedDynamicDimension } from '../../Utils/ApplicationSpace';
const style=StyleSheet.create({
    MainView:{
        flex:1,
        flexDirection:'column',
        padding:deviceBasedDynamicDimension(10,true,1),
        backgroundColor:'white',

    },
    StyleFirst:{
        fontSize:deviceBasedDynamicDimension(14,true,1),
        lineHeight:deviceBasedDynamicDimension(18,true,1),
        color:"black",
        fontWeight:'500'
    },
    textInputSTyle:{
        fontSize:deviceBasedDynamicDimension(14,true,1),
        lineHeight:deviceBasedDynamicDimension(20,true,1),
        height:deviceBasedDynamicDimension(40,true,1),
        borderColor:"gray",
        borderRadius:deviceBasedDynamicDimension(14,true,1),
        borderWidth:deviceBasedDynamicDimension(1,true,1),
        marginVertical:deviceBasedDynamicDimension(14,true,1),
        paddingHorizontal:deviceBasedDynamicDimension(10,true,1),
    }
    ,
    CurrentStatus:{
        fontSize:deviceBasedDynamicDimension(16,true,1),
        lineHeight:deviceBasedDynamicDimension(18,true,1),
        marginVertical:deviceBasedDynamicDimension(18,true,1),
        color:"red",
        fontWeight:'600'
    },
    ImageSTyle:{
        marginVertical:deviceBasedDynamicDimension(30,true,1),
        height:deviceBasedDynamicDimension(100,true,1),
        width:deviceBasedDynamicDimension(100,true,1),
    },
    fastImageVIewStyle:{
        height:deviceBasedDynamicDimension(100,true,1),
        width:deviceBasedDynamicDimension(100,true,1),
        justifyContent:'center',
        alignSelf:'center',
        borderColor:'gray',
        borderWidth:1,
        borderRadius:deviceBasedDynamicDimension(50,true,1),
        marginVertical:deviceBasedDynamicDimension(50,true,1),
    },
    graphStyle:{
        backgroundColor:'white',
        marginVertical:deviceBasedDynamicDimension(50,true,1),
        alignSelf:'center',
        // height:200,
        justifyContent:'center'
    }
})

export default style;