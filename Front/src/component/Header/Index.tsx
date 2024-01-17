import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from './style';

const Header = (props:any) => {
  
  const {content}= props;

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../../../assets/images/logo.png')}/>
    <Text style={styles.text}>{content}</Text>
    </View>
  )
};

export default Header;

