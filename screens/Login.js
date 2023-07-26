import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../mainStyle';
import usuarioService from '../services/UsuarioService';
import { Alert } from 'bootstrap';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
Importações:
npm install react-native-elements
npm i --save react-native-vector-icons
*/

export default function Login({navigation}) {

  const [email, setEamil] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoading, setLoading] = useState(false);

    let data = {
      username: email,
      password: password
    }
    
    usuarioService.login(data)
    .then((response) => {
      setLoading(false)      
      navigation.reset({
        index: 0,
        routes:[{name: "Principal"}]
      })  
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Usuário não existe")
      //showDialog("Erro","Houve um erro inesperado", "ERRO")
    })
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  useEffect(() => {
    AsyncStorage.getItem("TOKEN").then((token) => {
      console.log("Token")
    })
  })

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

      { isLoading &&
        <ActivityIndicator/>
      }

      { !isLoading &&
        <Button
        icon = {
          <Icon
          //right-to-bracket
            name = "arrow-circle-right"
            size = {15}
            buttonStyle={specificStyle.button}
            color = {"white"}
          />
        } title = "Login"
        buttonStyle={specificStyle.button}
        onPress = {() => entrar()}/>
      }

    <Button
      icon = {
        <Icon
        //right-to-bracket
          name = "address-book"
          size = {15}
          color = {"white"}
        />
      } title = "Cadastre-se"
      buttonStyle={specificStyle.button}
      onPress = {() => cadastrar()}/>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
    marginTop: 10
  }
})