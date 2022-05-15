import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ScreenNameHomeDetailsPage } from '../../Route/ScreenNames';
import style from './style';
const Index = ({navigation,route}) => {

    const [Visible, setVisible] = React.useState(false);
    const [status, setstatus] = React.useState(false);

    React.useEffect(() => {


        if (status === "Ready" || status === "Ready!") {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [status]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.MainView}>
                {
                    Visible == true &&
                    <Pressable onPress={() => {
                        //  STart Loading Another SCreen here
                        navigation.navigate(ScreenNameHomeDetailsPage)
                    }}>
                        <Image
                            height={50}
                            width={50}
                            source={{ uri: "https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" }}
                            style={style.ImageSTyle}>

                        </Image>
                    </Pressable>
                }
                <Text style={style.StyleFirst}>
                    Are you ready to be a pokemon master?
                </Text>
                <TextInput
                    value={status}
                    defaultValue={status}
                    onChangeText={(text) => {
                        setstatus(text)
                    }}

                    style={style.textInputSTyle}>

                </TextInput>

                <Text style={style.StyleFirst}>
                    Are you ready to be a pokemon master?
                </Text>

                {
                    !Visible &&
                    <Text style={style.CurrentStatus}>
                        I am not ready yet!
                    </Text>
                }
            </View>
        </SafeAreaView>
    )
}


export default Index;
