import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/Signin/SignIn';
import SignUpScreen from '../screens/SignUp/SignUp';
import Home from '../screens/HomeScreen/Index';
import Félicitation from '../screens/LittleScreen/Félicitation';
import Footer from '../Foorter/Index';
import Carte from '../component/Card/List';
import Card from '../component/Card/Card';
import Valider from '../screens/LittleScreen/Valider';

const Stack = createNativeStackNavigator<RouteParams>();


export type RouteParams = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
    Félicitation: undefined;
    Footer:undefined;
    Carte:undefined;
    Card:undefined;
    Valider:undefined;
  }

  const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={SignInScreen} /> 
          <Stack.Screen name="SignUp" component={SignUpScreen} /> 
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Félicitation" component={Félicitation} />
          <Stack.Screen name="Footer" component={Footer} />
          <Stack.Screen name="Carte" component={Carte} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Valider" component={Valider} />

        </Stack.Navigator>

    );
  }

  export default Navigation;
