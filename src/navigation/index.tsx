import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COMMON_ROUTES } from '../constants/routes';
import Home from '../containers/home/index';
import SignUp from '../containers/signUp/index';
import LogIn from '../containers/login/index';

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={COMMON_ROUTES.HOME} headerMode="none">
        <Stack.Screen name={COMMON_ROUTES.HOME} component={Home} />
        <Stack.Screen name={COMMON_ROUTES.LOG_IN} component={LogIn} />
        <Stack.Screen name={COMMON_ROUTES.SIGN_UP} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
);