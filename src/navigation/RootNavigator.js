import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './authNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
