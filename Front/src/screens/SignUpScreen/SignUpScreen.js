import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {

    const [username, setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
        const navigation  = useNavigation();
        const [checkValidEmail, setCheckValidEmail] = useState(false);  

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

    const onRegisterPressed = () => {
         navigation.navigate('ConfirmEmail');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    const ontermOfUsePressed = () => {
        navigation.navigate('ConfirmEmail');
    }

    const onPrivacyPressed = () => {
         navigation.navigate('ConfirmEmail');
    }
  return (

    <ScrollView>
    <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
     
      <CustomInput placeholder="Email" onChangeText={text => handleCheckEmail(text)} value={email} setValue={setEmail} />
      {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>

      <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>

      <CustomButton  text=" Register" onPress={onRegisterPressed}/>

      <Text style={styles.text}>By registering, you confirm that you accept our {' '}
      <Text style={styles.link} onPress={ontermOfUsePressed}>Terms of Use</Text> and {' '}
      <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
      </Text>
      
      <CustomButton  text="Have an account? Sign in" onPress={onSignInPress} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root:{
    alignItems:"center",
    padding:20,
    marginTop: 25,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C60',
    margin:10,
  },
  text:{
    color:'gray',
    marginVertical:10,
  },
  link:{
    color: '#FDB075'
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});