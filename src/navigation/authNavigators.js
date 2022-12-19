import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import HomeScreen from '../screens/HomeScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          // ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />

      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          // ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />

      <Auth.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          // ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
