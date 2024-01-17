import { View, Text, TextInput,StyleSheet} from 'react-native'
import React from 'react'
import {Controller} from 'react-hook-form';

export default function CustomInput (props: any) {

  const {control,name, rules = {},placeholder,secureTextEntry} = props;
    return (
     <Controller
       control={control}
       name={name}
       rules={rules}
       render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
         <>
           <View
             style={[
               {borderColor: error ? 'red' : '#e8e8e8'},
             ]}>
             <TextInput
               value={value}
               onChangeText={onChange}
               onBlur={onBlur}
               placeholder={placeholder}
               secureTextEntry={secureTextEntry}
             />
           </View>
           {error && (
             <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
           )}
         </>
       )}
     />
   );
 }





 
 
 