import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    screen:{
      top:100,
      
    },
    root:{
      height:'100%',  
      backgroundColor:'#3b438b',
    },
    scroll: {
      top:30,
      marginLeft: '5%', 
      marginTop: '5%'
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#051C60',
      margin:10,
    },
    text:{
        fontWeight:"bold",
        paddingTop:5,
        fontSize:20,
        color: '#ffbe2d',
        left:'5%',
    },
    link:{
      color: '#FDB075'
    },
    container:{
        width:"70%",
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        left:'5%',
      },
  });
  
  export default styles;