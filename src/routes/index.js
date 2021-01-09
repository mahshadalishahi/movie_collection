import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import {createSwitchNavigator} from '@react-navigation/compat';
import HomeScreen from '../screens/homeScreen';
import CategoriesScreen from '../screens/categoriesScreen';
import MoviesScreen from '../screens/moviesScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const Root = createSwitchNavigator(
  {
    splash: {screen: SplashScreen},
    auth: AuthStack,
    app: AppStack,
  },
  {
    backBehavior: 'none',
  },
);
export default Root;
