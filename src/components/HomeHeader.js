import {Icon} from '@rneui/base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, parameters} from '../global/styles';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon type="material-community" name="menu" color="white" size={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
});
