import  React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import DetailPage from '../Screens/DetailPage';
import DetailPageLevel from '../Screens/DetailPageLevel';
import { ScreenNameHome, ScreenNameHomeDetailsPage, ScreenNameHomeDetailsPageLevel } from './ScreenNames';
import { screen_message_details, screen_message_home } from '../Utils/strings';

const Stack = createNativeStackNavigator();
  const MainStack=()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenNameHomeDetailsPage}>
          <Stack.Screen   options={{ title: screen_message_home }} name={ScreenNameHome} component={Home} />
          <Stack.Screen   options={{ title: screen_message_details }} name={ScreenNameHomeDetailsPage} component={DetailPage} />
          <Stack.Screen   options={{ title: "" ,headerBackTitle:''}} name={ScreenNameHomeDetailsPageLevel} component={DetailPageLevel} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainStack
 