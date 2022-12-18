import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, SocialIcon, Button} from '@rneui/themed';
import Header from '../../components/Header';
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          //   marginTop: getStatusBarHeight(),
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          NEAR YOU
        </Text>
      </View>

      <View style={{flex: 10, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slider1}>
            <Image
              source={require('../../images/bbq.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slider2}>
            <Image
              source={require('../../images/burgar.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slider3}>
            <Image
              source={require('../../images/chocolateShake.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slider2}>
            <Image
              source={require('../../images/salad.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 4}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Login"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slider2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAES',
  },
  slider3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
});
