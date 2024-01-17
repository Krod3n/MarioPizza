import {StyleSheet, Dimensions} from 'react-native';
import { renderNode } from 'react-native-elements/dist/helpers';


const styles = StyleSheet.create({
cardcontainer:{
  width:'100%',
  height: 150,
  backgroundColor :'white',
  marginTop: 1,
 },

titles: {
  width: '55%',
  height:100,
  left:'45%',
 },

title: {
  fontSize: 16,
  fontWeight: 'bold',
 },

subtitle: {
  fontSize: 12,
  color:'#5c5e62'
 },

 image:{
   height:'50%',
   width:'40%',
   resizeMode: 'cover',
   position:'absolute',
 },

 prices: {
  flexDirection:'row',
  bottom:10,
  marginLeft: 10,
  marginTop: 40,
  justifyContent:'space-around',
 },

 border:{
 borderWidth:1,
 borderColor:'black', 
 width:30,
 textAlign:'center',
 },

 number:{
 justifyContent:'center',
 textAlign:'center',
 top:4,
 },

 price:{
  color:'red',
 },

 button:{
 flexDirection:'row',
 width:30,
 backgroundColor:'gray',
 textAlign:'center',

 },
 flat:{
  top:35, 
  left:0,
  width:'100%',
  height:'100%',
  backgroundColor:'#3b438b',
  height:600,
},

cadre:{
height:560,
left:'5%',
width:'90%',
borderColor:'white',
borderWidth: 10,
borderRadius:5,
backgroundColor:'white',
},

bas:{
  bottom:0,
  width:'90%',
  left:'10%',
  top:-5,
  flexDirection:'row',
  justifyContent:'space-around',
  marginRight:20,
},
droite:{
  top:10,
  height:20,
  color:'green',
  fontSize:15,
},
quantity:{
top:10, 
},
 });

 export default styles;
 