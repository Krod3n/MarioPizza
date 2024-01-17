import {useState, useEffect, useRef} from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Pressable, Button, FlatList} from 'react-native';

import { RouteParams } from '../../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NumericInput from 'react-native-numeric-input';
import styles from './styles';



const Count = ({id, updateOrder, price}:any) => {


return(
    <View  style={styles.bas}>
  

    <Text style={styles.quantity}>quantité</Text>

    <NumericInput
    minValue={0}
    maxValue={10}
    rounded={true}
    separatorWidth={0}
    onChange={(quantity)=> updateOrder(id, quantity)}
    upDownButtonsBackgroundColor='#3b438b'
    totalWidth={80}
    totalHeight={40}
    borderColor='white'

    />

     <Text style={styles.droite}>{price}€</Text> 
</View>


    )}
    
    export default Count;