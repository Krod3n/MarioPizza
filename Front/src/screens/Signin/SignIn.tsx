import React, { useState} from 'react';
import { View, Text} from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import Header from '../../component/Header/Index';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../../navigation/navigation';
import styles from './styles'; 
import AuthenticationService from '../../service/authentication-service';

const SignInScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();


  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  }

  const [message, setMessage] = useState<string>(' ');

  const Home = () => {
  
    setMessage('👉 Tentative de connexion en cours ...');
    AuthenticationService.login(watch('identifiant'),watch('password') ).then((isAuthenticated: any) => {
      if(!isAuthenticated) {
          setMessage('🔐 Identifiant ou mot de passe incorrect.');
          return;
      }
     navigation.navigate('Home');
  });
  }

return (

<View style={styles.root}>
  <Header  />

    
   
    <Text style={styles.text}>Identifiant</Text>
    <View style={styles.container}>
    <CustomInput style={styles.container}
      name='identifiant'
      placeholder='Téléphone' 
      type='number'
      control={control}
      rules={{
        required: 'L\'identifiant est obligatoire',
        minLength: {value: 10, message: 'Le téléphone doit faire 10 caractères minimum'}
      }}
    /></View>
   
    <Text style={styles.text}>Mot de passe</Text>
    <View style={styles.container}>
    <CustomInput 
      name='password'
      secureTextEntry 
      type='password' 
      placeholder='Mot de passe' 
      control={control}
      rules={{
        required: 'Le mot de passe est obligatoire', 
        minLength: {value: 6, message: 'Le mot de passe dois faire 6 caractères minimum'}
      }}
    /></View>


    <CustomButton style={styles.text} onPress={onSignUpPress} text="Don't have an account" type="TERTIARY" />


    <CustomButton text='Connexion'onPress={handleSubmit(Home)}/>
    <Text style={styles.button}>{message}</Text>
    </View>

)
}

export default SignInScreen;

/*export default function SignInScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm();

  
      const onSignInPressed = () => {
        navigation.navigate('Home');
  
      }
  
      const onSignUpPress = () => {
        navigation.navigate('SignUp');
   
      }

  return (

  <View style={styles.root}>

     <Header />

  <Text style={styles.text}>Identifiant</Text>
  <CustomInput style={styles.button} name="Number" placeholder="Number"  control={control} rules={{required: 'A Number is required'}} />

  <Text style={styles.text}>Mot de passe</Text>
  <CustomInput style={styles.button} name="Passeword"  placeholder="Passeword"
  control={control} 
  rules={{required:'Password is required', 
  minLength:{value:6, message:'Password should be minimun 6 characters long'}}} secureTextEntry/>

  <CustomButton  text="Don't have an account" onPress={onSignUpPress} type="TERTIARY"/>

  <CustomButton  text="Connexion" onPress= {handleSubmit(onSignInPressed)}/>


  </View>
);
};*/




/*type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  username: Field,
  password: Field,
}

const Login: FunctionComponent = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const [form, setForm] = useState<Form>({
    username: { value: '' },
    password: { value: '' },
  });

  const [message, setMessage] = useState<string>('Vous êtes déconnecté');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField });
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if (form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if (form.password.value.length < 6) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField: Field = { value: form.password.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }
  
  const onSignUpPress = () => {
    navigation.navigate('SignUp');

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
        if (!isAuthenticated) {
          setMessage('🔐 Identifiant ou mot de passe incorrect.');
          return;
        }
        navigation.navigate('Home');

      });
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
          <View style={styles.root}>

              <Header />

                <Text style={styles.text}>Identifiant</Text>
                <Input style={styles.button} id="username" type="text" name="username" keyboardType='numeric' value={form.username.value} onChange={e =>handleInputChange(e)} />

                <Text style={styles.text}>Mot de passe</Text>
                <TextInput style={styles.button} value={form.password.value} onChangeText={e  => handleInputChange(e)}/>
                
                <CustomButton  text="Don't have an account" onPress={onSignUpPress} type="TERTIARY"/>

                <button type="submit" className="btn">Valider</button>
          </View>
    </form>
  );
};

export default Login;*/



