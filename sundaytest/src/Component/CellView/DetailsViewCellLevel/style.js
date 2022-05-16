import React from 'react';
import {StyleSheet} from 'react-native';
import { deviceBasedDynamicDimension } from '../../../Utils/ApplicationSpace';
const style=StyleSheet.create({

    mainView:{
      flex:1,
        // backgroundColor:'pink',
        // maxHeight:deviceBasedDynamicDimension(100,true,1),
        minHeight:deviceBasedDynamicDimension(100,true,1),
        margin:deviceBasedDynamicDimension(10,true,1),
        
        justifyContent:'center',
        alignItems:'flex-start',
        alignContent:'center',
        height:"auto",
        

    },
    textstyleName:{
        fontSize:deviceBasedDynamicDimension(18,true,1),
        lineHeight:deviceBasedDynamicDimension(20,true,1),
        // height:deviceBasedDynamicDimension(50,true,1),
        // height:deviceBasedDynamicDimension(26,true,1),
        color:"black",
        alignSelf:'center',

        // height:'100%',
        alignContent:'center',
        fontWeight:'bold',
        alignSelf:'center',
        margin:deviceBasedDynamicDimension(5,true,1),
        width:'100%',
        textAlign:'left',
        paddingLeft:deviceBasedDynamicDimension(15,true,1),
        textAlignVertical:'center',
        justifyContent:'center',
        
    //   backgroundColor:'red'

    },
    RowView:{
      
        minHeight:deviceBasedDynamicDimension(30,true,1),
        height:deviceBasedDynamicDimension(30,true,1),
        flexGrow:1,
        width:'100%',
        flexDirection:'row',
        // backgroundColor:'green',
        marginVertical:deviceBasedDynamicDimension(2,true,1),
    }
    ,   RowView1:{
   
        
        height:deviceBasedDynamicDimension(30,true,1),
        // backgroundColor:'green',
        flex:0.4,
    }  ,RowView2:{
        height:deviceBasedDynamicDimension(30,true,1),
     
        // backgroundColor:'red',
        flex:0.6,
    }

})

export default style;
