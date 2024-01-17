import {useState, useEffect} from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Pressable, Button, FlatList, Dimensions,Image} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../../navigation/navigation';
import Illus from '../helper/Illus';
import Count from './Count';
import Order from '../../model/Order';



export default  function Card ({id, pizzas, updateOrder, quantity}:any) {
  



  return(
    
   <View style={styles.cardcontainer}>

        <Image source={Illus[pizzas.image]} style={styles.image}/>
         <View style={styles.titles}>
             <Text style= {styles.title}>{pizzas.name}</Text>
             <Text style={styles.subtitle}>{pizzas.description}</Text>
          </View>
          
       <Count
       id={pizzas.id}
       updateOrder={updateOrder}
       price={pizzas.price}
       />

    
      
          </View>
  
  )
}
