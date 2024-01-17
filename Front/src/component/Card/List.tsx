import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TextInput, Pressable, Button, FlatList, ImageStore, Dimensions} from 'react-native';
import styles from './styles';
import pizzaService from '../../service/pizzaService';
import Pizza from '../../model/pizza';
import navigation, { RouteParams } from '../../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Card  from './Card';



const Carte = ({id, pizzas, updateOrder}:any) => {
 


    return (
        <View style={styles.flat}>
          <View style={styles.cadre}>
            
          <FlatList 
            data={pizzas}
            renderItem={({item}) => 
            <Card pizzas={item}
            updateOrder={updateOrder} 
            id={item.id}            
            /> }
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'normal'}
            disableIntervalMomentum={true}
          />
           </View>
        </View>
        )
};

export default Carte;
