import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardList from '../../component/Data/Index';
import Header from '../../component/Header/Index';
import Footer from '../../Foorter/Index';
import { RouteParams } from '../../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import List from '../../component/Card/List';
import pizzaService from '../../service/pizzaService';
import Order from '../../model/Order';
import Pizza from '../../model/pizza';



const Index = (item: any) => {

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [order, setOrder] = useState<Order[]>([]);


  

  useEffect(() => {
    pizzaService.getPizza().then((pizzas) => setPizzas(pizzas));
  }, []);

  const updateOrder = (id: number, quantity: number) => {
    let newOrder = [];
    order
      .filter((pizzas) => pizzas.id !== id)
      .map((pizzas) => newOrder.push(pizzas));
    newOrder.push(new Order(id, quantity));
    setOrder(newOrder);
  };


  return (
    <>
      <Header content={"Passez votre \ncommande"} />

      <View style={styles.container}>
        <List
          pizzas={pizzas}
          id={item.id}
          updateOrder={updateOrder}
        />
        <Footer
          pizzas={pizzas}
          order={order} />
      </View>
    </>
  );
}
export default Index;