import {View, Text, FlatList, Dimensions} from 'react-native';
import { Datacard } from './Datacard';
import Card from '../Card/Card';
import styles from './styles';

 const CardList = ({updateOrder, pizzas}:any) => {

return (
  <View style={styles.container}>
  <View style={styles.cadre}>
   <FlatList 
     data={pizzas}
     renderItem={({item}) => <Card pizzas={item} updateOrder={updateOrder}/>}
     showsVerticalScrollIndicator={false}
     snapToAlignment={'start'}
     decelerationRate={'fast'}
     snapToInterval={Dimensions.get('window').height}
   />
  </View>
  </View>
);
};

export default CardList;