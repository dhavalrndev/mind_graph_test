import React, { } from 'react';
import { View, Text, Platform } from 'react-native';
import { isNull } from '../../Utils';

import { label_data_not_available } from '../../Utils/strings';
import styles from './style';
const index = (props) => {
               return (
                    <View {...props}     style={styles.nodatFountMainView}>
                              {/* <PartTitleCell style={{ marginTop: 10 }} orientation={systemState.appOrientation} title={label}></PartTitleCell> */}
                              <View style={styles.lineUpView}></View>
                              <View style={styles.cardstyle}>
                                        <Text style={styles.darkGreyBOld}>{isNull(props.label) == true ? props.label :label_data_not_available}</Text>
                              </View>
                    </View>
          )
}

export default index;
