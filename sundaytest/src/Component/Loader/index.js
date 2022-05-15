import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Modal
} from 'react-native';
import   style  from './style';
// import { connect } from 'react-redux';
const Loader = (props) => {
    // const { setLoading: { isLoading } } = this.props
    // const styles=style.
    return (
        <Modal
        statusBarTranslucent={true}
            transparent={true}
            animationType={'none'}
            visible={props.visible!=null && props.visible!=undefined ? props.visible:false}
            supportedOrientations={['portrait', 'landscape']}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={style.modalBackground}>
                <View style={style.activityIndicatorWrapper}>
                    <ActivityIndicator
                        size='large'
                        color='green'
                        animating={true} />
                </View>
            </View>
        </Modal>

    )
}


export default Loader;

