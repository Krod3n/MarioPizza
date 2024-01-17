import React, { useState} from 'react';
import { View, Text, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../../navigation/navigation';
import {StyleSheet, Dimensions} from 'react-native'
import Header from '../../component/Header/Index';
import SignUpScreen from '../SignUp/SignUp';

const Valider = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

      const log = () => {
         navigation.navigate('Home');
      };
      
    
    return(
        <>
        <Header/>
        <View style={styles.fond}>
        <View style={styles.container}>
            <Text style={styles.text}>Votre commande est en cours de préparation</Text>
            <Text style={styles.text1}> Elle sera livrée dans 30 minutes</Text>
            <Text style={styles.button} onPress={log}>Retour à la page de commande</Text>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    fond:{
        top:30,
        height : Dimensions.get('window').height,
        backgroundColor : '#3b438b',
    },
    container:{
        top:20,
        left:'5%',
        width:'90%',
        height:'100%',
        justifyContent:'center',
},

    text1:{
    textAlign:'center',
    marginTop:'20%',
    fontWeight:"bold",
    fontSize:30,
    color: '#ffbe2d',
},
    title:{
        textAlign:'center',
        fontWeight:"bold",
        fontSize:60,
        color: '#ffbe2d',
},
    text:{
        textAlign:'center',
        marginTop:'20%',
        fontWeight:"bold",
        fontSize:30,
        color: '#ffbe2d',
},
    button:{
        textDecorationLine:'underline',
        textAlign:'center',
        marginTop:'70%',
        fontWeight:"bold",
        fontSize:25,
        color: '#ffbe2d',
},
});


export default Valider;