import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View,useWindowDimensions, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../../components/CustomInput/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import {useForm, Controller} from 'react-hook-form';



export default function SignInScreen() {

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation  = useNavigation();
  
  const onSignInPressed = () => {
      console.warn("Sign in")
      navigation.navigate('Home');
  }

  const onSignUpPress = () => {
      navigation.navigate('SignUp');
  }
return (

  <View style={styles.root}>
 
  <Header/>


    <Text style={styles.text}>Identifiant</Text>

    <CustomButton name ="Number" value={number} setValue={setNumber}/>

    <Text style={styles.text}>Mot de passe</Text>
    <CustomButton name= "password" value={password} setValue={setPassword}   secureTextEntry/>

    <CustomButton  text="Sign In" onPress={onSignInPressed}type="PRIMARY"/>

    <CustomButton  text="Don't have an account" onPress={onSignUpPress} type="TERTIARY"/>
  </View>

);
}

const styles = StyleSheet.create({
root:{
  height : Dimensions.get('window').height,
  alignItems:"center",
  padding:20,
  paddingTop: 100,
  backgroundColor : '#08469E',
  justifyContent:'center',
},
text:{
  alignItems:'left',
  fontSize:20,
  color: 'yellow',
},
});