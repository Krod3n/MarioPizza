import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'50%',
        padding:10,
        marginVertical:5,
        marginLeft:145,
        borderRadius:5,
    },

    container_PRIMARY:{
        backgroundColor:'#ffbe2d',
    },

    container_SECONDARY:{
      borderColor:'#3B71F3',
      borderWidth:2,
    },

    text:{
        fontSize:20,
        textAlign:'center',
        fontWeight:"bold",
        color:"#3b438b",
    },
    text_TERTIARY:{
        textDecorationLine:"underline",
        marginLeft:20,
        color:"#ffbe2d"
    },
    
});

export default styles;