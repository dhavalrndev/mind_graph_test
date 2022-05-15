import React from 'react';
import { Dimensions, Platform, PixelRatio, } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// let screenWidth = Dimensions.get('window').width;
// let screenHeight = Dimensions.get('window').height;


let artBoardHeightOrg = 375;
let artBoardWidthOrg = 667;
//Re calculated Artboard Dimension 
let artBoardWidth = isSameRatio() ? artBoardWidthOrg : screenWidth;
let artBoardHeight = isSameRatio() ? artBoardHeightOrg : screenHeight;
// To check if Artboard and Device screen has same ratio 
function isSameRatio() {
    return artBoardWidthOrg / artBoardHeightOrg < 1 && screenWidth / screenHeight < 1
}

//Top or Bottom nav spaces or any extra space occupied by os e.g Status bar, Notch 
let extraSpace = 0;

export function deviceBasedDynamicDimension(originalDimen, compareWithWidth, resizeFactor) {
    if (originalDimen != null) {
        if (resizeFactor != null) {
            originalDimen *= resizeFactor;
        }
        const compareArtBoardDimenValue = compareWithWidth ? artBoardWidth : artBoardHeight;
        const artBoardScreenDimenRatio = (originalDimen * 100) / compareArtBoardDimenValue;
        let compareCurrentScreenDimenValue = compareWithWidth ? screenWidth : screenHeight - extraSpace;
        // if (Platform.OS === 'web') {
        //     return (responsiveWidth(originalDimen / compareCurrentScreenDimenValue) * 100);
        // }
        return PixelRatio.roundToNearestPixel((artBoardScreenDimenRatio * compareCurrentScreenDimenValue) / 100,);
    }
    return null;
}

export const verySmallSPace = screenHeight * 0.0097  //5
export const veryMediumSPace = screenHeight * 0.018 //10
export const RegularSPace = screenHeight * 0.026;  //15
export const MediumSPace = screenHeight * 0.033;  //20
export const MediumSPace30 = screenHeight * 0.036;  //30
export const MediumSPaceDouble = screenHeight * 0.068;  //40
export const HightSpace = screenHeight * 0.087;  //50
export const VeryHightSpace = screenHeight * 0.091;  //50
export const VeryLargeSpace = screenHeight * 0.12;  //50

export const Prod_paddileft=20;
export const Prod_paddingPer="19%";