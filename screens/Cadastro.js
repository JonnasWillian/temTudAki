import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../mainStyle';

export default function Cadastro({navigation}) {

  const [email, setEamil] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);

  const salvar = () => {
    console.log("Salvou")
  }

  return (
    <View style={styles.container}>
      <Text h4>Cadastre-se</Text>

      <Input
        placeholder = 'E-mail'
        onChangeText = {value => setEamil(value)}
        keyboardType = 'email-adress'
      ></Input>

      <Input
        placeholder = 'Nome'
        onChangeText = {value => setNome(value)}
      ></Input>

      <Input
        placeholder = 'Cpf'
        onChangeText = {value => setCpf(value)}
        keyboardType = 'number-pad'
        returnKeyType = 'done'
      ></Input>

      <Input
        placeholder = 'Telefone'
        onChangeText = {value => setTelefone(value)}
        keyboardType = 'phone-pad'
        returnKeyType = 'done'
      ></Input>

      <CheckBox
        title="Eu aceito os termos de uso e privacidade"  
        checkedIcon="check"
        uncheckedIcon="square-0"
        uncheckedColor='green'
        
      />

      <Button
      icon = {
        <Icon
        //right-to-bracket
          name = "check"
          size = {15}
          color = {"white"}
        />
      } title = "Salvar"
      buttonStyle={specificStyle.button}
      onPress = {() => salvar()}/>
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