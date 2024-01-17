import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useForm } from 'react-hook-form';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../../navigation/navigation';
import Header from '../../component/Header/Index';
import User from '../../model/User';
import AddUserService from '../../service/AddUserService';
import styles from './styles';
import AuthenticationService from '../../service/authentication-service';


const SignUpScreen = () => {

const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

const {
  control,
   handleSubmit,
    watch,
  } = useForm();

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }
  
    const mdp = watch('password');

  const Creation = (data: any) => {

      AddUserService.addUser(data).then(Felicity);
  }
  
  const Felicity = () => {

    AuthenticationService.login(watch('phonenumber'),watch('password')).then((isAuthenticated: any) => {
      if(!isAuthenticated) {
          return;
      }
     navigation.navigate('Félicitation');

  });
  }
  
  return (

  <View>
     
    <Header />
    <View style={styles.screen}>
    <View style={styles.root}>
   
      <Text style={styles.text}>Nom</Text>
      <View style={styles.container}>
      <CustomInput name="lastname" control={control} 
      rules={{required:'Le nom est requis', minLength:{value:2, message:'Le nom doit contenir un minimun de 2 caractéres.'},
      maxLenght:{value:24, message:'Le nom doit contenir un maximun de 24 caractéres.'}}} />
      </View>

      <Text style={styles.text}>Prenom</Text>
      <View style={styles.container}>
      <CustomInput name="firstname" control={control} 
      rules={{required:'Le prénom est requis', minLength:{value:2, message:'Le prénom doit contenir un minimun de 2 caractéres'},
      maxLenght:{value:24, message:'Le prénom doit contenir un maximun de 24 caractéres'}}} />
      </View>

      <Text style={styles.text}>Mot de passe</Text>
      <View style={styles.container}>
      <CustomInput name="password"  type='mdp' control={control}
       rules={{required:'Mot de passe requis', minLength:{value:6, message:'Le mot de passe doit contenir un minimun de 6 caractéres'}}} secureTextEntry/>
      </View>

      <Text style={styles.text}>Confirmation</Text>
      <View style={styles.container}>
      <CustomInput name="confirmation"  type='mdp'
       control={control} 
       rules={{
        required: 'Confirmer le mot de passe est obligatoire',
        minLength: {value: 6, message: 'Le mot de passe doit contenir un minimun de 6 caractéres'},
        validate: (value: string) => value === mdp ? true : 'Le mot de passe ne correspond pas'
      }} secureTextEntry/>
      </View>

     <Text style={styles.text}>Téléphone</Text>
     <View style={styles.container}>
     <CustomInput name="phonenumber"  type="number" control={control} 
      rules={{required:'Le numéro de télephone est requis', minLength:{value:10, message:'Le téléphone doit contenir un minimun de 10 caractéres'},
      maxLenght:{value:12, message:'Le téléphone doit contenir un maximun de 12 caractéres'},pattern:{value:Number, message:'doit contenir que des chiffre'} }} />
     </View>

     <Text style={styles.text}>Adresse</Text>
     <View style={styles.container}>
     <CustomInput name="address"  control={control}
      rules={{required:'L\'adresse est requis', minLength:{value:10, message:'L\'adresse doit contenir un minimun de 10 caractéres'},
      maxLenght:{value:200, message:'L\'adresse doit contenir un maximun de 200 caractéres'}}}/>  
     </View>

      <ScrollView pagingEnabled showsVerticalScrollIndicator={false} style={styles.scroll}>
      <KeyboardAvoidingView>
      <CustomButton  text="Créer"  onPress={handleSubmit((data) => Creation(data))}/>
      <CustomButton style={styles.text} onPress={onSignInPress} text="Don't have an account" type="TERTIARY" />
      </KeyboardAvoidingView>
      </ScrollView>
      </View>
      </View>
    </View>

  );
}
export default SignUpScreen;