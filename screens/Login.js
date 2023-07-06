import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../mainStyle';

/*
Importações:
npm install react-native-elements
npm i --save react-native-vector-icons
*/

export default function Login({navigation}) {

  const [email, setEamil] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes:[{name: "Principal"}]
    })
  }

  return (
    <View style={styles.container}>
      <Text h4>Entre no TemTudoAki</Text>

      <Input
        placeholder = 'E-mail'
        leftIcon = {{type:'font-awesome', name: 'envelope'}}
        //style = {styles}
        onChangeText = {value => setEamil(value)}
        keyboardType = 'email-adress'
      ></Input>

      <Input
        placeholder = 'Senha'
        leftIcon = {{type:'font-awesome', name: 'lock'}}
        //style = {styles}
        onChangeText = {value => setPassword(value)}
        keyboardType = 'password'
        secureTextEntry = {true} //Opção para esconder caracter
      ></Input>

      <Button
      icon = {
        <Icon
        //right-to-bracket
          name = "arrow-circle-right"
          size = {15}
          color = {"white"}
        />
      } title = "Login"
      onPress = {() => entrar()}/>

    <Button
      icon = {
        <Icon
        //right-to-bracket
          name = "address-book"
          size = {15}
          color = {"white"}
        />
      } title = "Cadastr-se"
      onPress = {() => entrar()}/>
    </View>
  );
}