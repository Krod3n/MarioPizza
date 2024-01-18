import {View, Text, ImageBackground, StyleSheet, TextInput} from 'react-native';
import styles from './styles';


const Card = (props) => {

  const {name, tagline, image}= props.car;

  return(
    
    <View style={styles.cardcontainer}>
       <ImageBackground source={image}
        style={styles.image}
        />

      <View style={styles.titles}>
          <Text style= {styles.title}>{name}
          </Text>
          <Text style={styles.subtitle}>
          {tagline}</Text>
        </View>
    <View style={styles.number}>
        <TextInput placeholder="0"/></View>
    </View> 
  );
};
export default Card;
