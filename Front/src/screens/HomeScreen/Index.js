import { View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import React from 'react';
import Card from '../../components/Card/Card';
import CustomImput from '../../components/CustomInput/CustomInput';
import CardList from '../../components/Data/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function index()  {

  return (  
 <>
     <Header content="Passez votre commande"/>
   
      <View style= {styles.container}>
  
      <CardList/>
      
      <StatusBar style="auto"/>
   </View>
   <Footer/>
   </>
  );
}

const styles = StyleSheet.create({
  
container:{
  flex: 1,
  backgroundColor: '#049CD8',
  alignItems: 'center',
  justifyContent: 'center',
 },
});