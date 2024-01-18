import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
cardcontainer:{
  width:'100%',
  height: 100,
  backgroundColor :'white',
  marginTop: 10,
 },

titles: {
  width: '100%',
  alignItems: 'center',
 },

title: {
  fontSize: 16,
  fontWeight: 'bold',
 },

subtitle: {
  fontSize: 10,
  color:'#5c5e62'
 },

 image:{
   height:'80%',
   width:'50%',
   resizeMode: 'cover',
   position:'absolute',
 },
 number: {
  bottom:10,
  marginLeft: '10px',
  marginTop: '50px',
  justifyContent:'left',
 },
 });

 export default styles;
 