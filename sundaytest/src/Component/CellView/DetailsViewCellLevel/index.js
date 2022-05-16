import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { isNull } from '../../../Utils';
import Card from '../../Card'
import style from './style';
import { str_seat, str_name } from '../../../Utils/strings';
import { deviceBasedDynamicDimension } from '../../../Utils/ApplicationSpace';
const Index = (props) => {

    const [Name, setName] = React.useState("");
    const [Seat, setSeat] = React.useState("");
    React.useEffect(() => {
        if (isNull(props?.item?.stat?.name)) {
            setName(props?.item?.stat?.name)
        }

        if (isNull(props?.item?.base_stat)) {
            setSeat(props?.item?.base_stat)
        }
    }, []);

    return (
        <Card style={style.mainView}>
            <View style={{ flex: 1 ,marginVertical:deviceBasedDynamicDimension(10,true,1)}}>

                <View style={style.RowView}>


                    <View style={style.RowView1}>
                        <Text style={style.textstyleName}>{str_name}</Text>
                    </View>


                    <View style={style.RowView2}>
                    <Text style={style.textstyleName}>{Name}</Text>
                    
                    </View>

                </View>

                <View style={style.RowView}>


                    <View style={style.RowView1}>
            <Text style={style.textstyleName}>{str_seat}</Text>
                    </View>


                    <View style={style.RowView2}>
                    <Text style={style.textstyleName}>{Seat}</Text>
                    </View>

                </View>


                {/*    <Text style={style.textstyleName}>{str_name}</Text> */}

            </View>
        </Card>
    )
}

export default Index;