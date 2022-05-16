import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native';
import { deviceBasedDynamicDimension } from '../../Utils/ApplicationSpace';

const Index=(props)=>{
    const [Search,setSearch]=React.useState("")
    return (
        <View style={style.MainView}>
            <TextInput 
            value={Search}
            defaultValue={Search}
            placeholder={"Search"}
            placeholderTextColor={"Gray"}
            onChangeText={(text)=>{
                setSearch(text)
                if(props?.change!=null && props?.change!=undefined)
                {
                    props?.change(text)
                }
                
            }}
            style={style.textView}></TextInput>
            <TouchableOpacity
            onPress={()=>{
                setSearch("")
                if(props?.change!=null && props?.change!=undefined)
                {
                    props?.change("")
                }
            }}
            style={style.TouchableView}>
                <Image 
                source={require('../../../src/assets/Image/cross.png')}
                style={style.ImageStyle}>

                </Image>
            </TouchableOpacity>
        </View>
    )
}


const style=StyleSheet.create({
    MainView:{
        flexDirection:'row',
        flex:1,
        // width:'50%',
        maxHeight:deviceBasedDynamicDimension(40,false,1),
        marginLeft:deviceBasedDynamicDimension(10,false,1),
        marginRight:deviceBasedDynamicDimension(20,false,1),
        height:deviceBasedDynamicDimension(35,false,1),
        backgroundColor:'white',
        borderRadius:deviceBasedDynamicDimension(14,false,1),
        borderColor:'gray',
        borderWidth:deviceBasedDynamicDimension(0.5,false,1),
        justifyContent:'center'

    },
    textView:{
        textAlignVertical:'center',
        textAlign:'left',
        marginHorizontal:deviceBasedDynamicDimension(1,false,1),
        justifyContent:'center',
        backgroundColor:'white',
        alignSelf:'center',
        flex:0.95,
        // width:'100%'
        fontSize:deviceBasedDynamicDimension(16,false,1),
        // paddingHorizontal:10,
        lineHeight:deviceBasedDynamicDimension(18,false,1),
        height:deviceBasedDynamicDimension(25,false,1),
        color:'black'
    },
    TouchableView:{
        height:deviceBasedDynamicDimension(30,false,1),
        width:deviceBasedDynamicDimension(30,false,1),
        height:'100%',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'white',
        alignSelf:'center'

    },
    ImageStyle:{
        height:deviceBasedDynamicDimension(20,false,1),
        width:deviceBasedDynamicDimension(20,false,1),
        tintColor:'green',
        alignSelf:'center'

    }
})

export default Index;