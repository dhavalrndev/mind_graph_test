import  React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import { ScreenNameHome } from './ScreenNames';
import { screen_message_home } from '../Utils/strings';

const Stack = createNativeStackNavigator();
  const MainStack=()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenNameHome}>
          <Stack.Screen   options={{ title: screen_message_home }} name={ScreenNameHome} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainStack
 