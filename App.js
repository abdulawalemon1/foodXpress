import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />

      {/* <SignInScreen /> */}
      <SignInWelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundColor: 'white',
});
