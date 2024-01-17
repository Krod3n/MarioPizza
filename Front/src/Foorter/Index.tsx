import { View, Image, Text } from 'react-native';
import CustomButton from '../component/CustomButton/CustomButton';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import AddOrderService from '../service/AddOrderService'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/navigation';
import { useEffect, useState } from 'react';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import pizza from '../model/pizza';


const Footer = ({ order, pizzas}: any) => {

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();


  const [total, setTotal] = useState(0)

  useEffect(() => {
    let total = 0;
    order.forEach((item:any) => {
      total +=
      item.quantity * pizzas.find((pizza:pizza) => pizza.id === item.id).price
    });

    setTotal(total)
  }, [order])

  console.log(order)
  const valide = () => {
    AddOrderService.addOrder(order);
    navigation.navigate('Valider')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total: {total.toFixed(2)} €</Text>
      <View style={styles.button}><CustomButton text="Valider" onPress={valide}/></View>
    </View>
  )
};

export default Footer;
