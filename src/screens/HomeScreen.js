import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/styles';

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  return (
    <View>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => {
              setDelivery(true);
            }}>
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.buttons : colors.grey4,
              }}>
              <Text style={styles.deliveryText}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDelivery(false);
            }}>
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.grey5 : colors.buttons,
              }}>
              <Text style={styles.deliveryText}>Pick Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
