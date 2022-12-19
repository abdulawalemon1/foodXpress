import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, SocialIcon, Button} from '@rneui/themed';
import Header from '../../components/Header';
// import {Button} from '@rneui/base';

export default function SignInScreen({navigation}) {
  const [textInputToFocus, settextInputToFocus] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" navigation={navigation} />
      <View style={{marginLeft: 180, paddingTop: 15}}>
        <Text style={styles.PageTitle}>Login</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please insert your email and password!</Text>
      </View>

      <View style={{marginTop: 25}}>
        <View style={styles.TextInput3}>
          <Animatable.View
            animation={textInputToFocus ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="mail"
              iconStyle={{color: colors.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            placeholder="Email"
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInputToFocus ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: colors.grey3}}
              type="material"
            />
          </Animatable.View>

          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              settextInputToFocus(false);
            }}
            onBlur={() => {
              settextInputToFocus(true);
            }}
          />

          <Animatable.View
            animation={textInputToFocus ? '' : 'fadeInRight'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey3, paddingRight: 15}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="LOGIN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password?
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#86939e'}}>
          OR
        </Text>
      </View>

      <View>
        <SocialIcon
          title="SignIn With Facebook"
          button
          type="facebook"
          style={parameters.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop: 10}}>
        <SocialIcon
          title="SignIn With Google"
          button
          type="google"
          style={parameters.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginTop: 25, marginRight: 22, alignItems: 'flex-start'}}>
        <Text
          style={{
            ...styles.text1,
            textDecorationLine: 'underline',
            marginLeft: 20,
          }}>
          New to FoodXpress?
        </Text>
      </View>
      <View
        style={{alignItems: 'flex-end', marginHorizontal: 20, marginTop: 20}}>
        <Button
          title="Sign Up"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    fontSize: 20,
    color: '#86939e',
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  TextInput3: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 18,
  },
  PageTitle: {
    color: '#ff8c52',
    fontSize: 20,
    fontWeight: 'bold',
    // display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
    marginRight: 10,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
