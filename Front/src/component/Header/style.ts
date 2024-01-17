import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container:{
    top:0,
    zIndex:100,
    flexDirection:'row',
    height:100,
    width:'100%',
    backgroundColor:'#3b438b',
    position:'absolute',
  },
  logo:{
    left:20,
    paddingLeft:10,
    width:100,
    height:100,
    resizeMode:'contain',
  },
  text:{
   left:40,
   fontWeight:'bold',
   fontSize:25,
   alignSelf:'center',
   color:'#ffbe2d',
  },
})
export default styles;