import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    zIndex: 100,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#3b438b',
    position: 'absolute',
    height: 70,
  },
  text: {
    left:40,
    fontWeight:'bold',
    fontSize:20,
    alignSelf: 'center',
    color: '#ffbe2d',
  },
  button:{
  top:7,
  right:30,
  },
});
export default styles;
