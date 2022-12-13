import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />

      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundColor: 'white',
});
