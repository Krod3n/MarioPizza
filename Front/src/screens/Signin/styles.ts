import {StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
    root: {
      height : Dimensions.get('window').height,
      backgroundColor : '#3b438b',
      justifyContent:'center',
    
    }, 
    button:{
    paddingLeft:30,
    },
    text:{
      fontWeight:"bold",
      paddingTop:10,
      left:35,
      fontSize:30,
      color: '#ffbe2d',
    },
    container:{
      width:"80%",
      backgroundColor:'white',
      borderRadius:5,
      borderWidth:1,
      height:'8%',
      paddingHorizontal:10,
      paddingVertical:15,
      marginVertical:5,
      left:35,
    },
    test:{
      flexDirection:'row',
      paddingVertical:'center',
      justifyContent:'space-between'
    },
    creer:{
      fontWeight:"bold",
      paddingTop:10,
      left:45,
      fontSize:30,
      color: '#ffbe2d',
    },
  });

  export default styles;