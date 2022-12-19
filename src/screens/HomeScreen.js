import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeHeader from '../components/HomeHeader';

export default function HomeScreen() {
  return (
    <View>
      <HomeHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
