import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';
import styles from '../mainStyle';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Cadastro({navigation}) {

  //Variavéis
  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [isSelected, setSelected] = useState(false);

  //Variavéis de erro
  const [erroEmail, setErrorEmail] = useState(null);
  const [erroNome, setErrorNome] = useState(null);
  const [erroCpf, setErrorCpf] = useState(null);
  const [erroTelefone, setErrorTelefone] = useState(null);

  let cpffield = null;
  let telefonefield = null;

  const validar = () => {
    let error = false;

    setErrorEmail(null)
    setErrorCpf(null)
    setErrorNome(null)
    setErrorTelefone(null)

    const verificaEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!verificaEmail.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu email corretamente")
      error = true;
    }
    if (!cpffield.isValid()) {
      setErrorCpf("Preencha seu cpf corretamente")
      error = true;
    }
    if (nome == null) {
      setErrorNome("Preencha seu nome corretamente")
      error = true;
    }
    if (telefone == null) {
      setErrorTelefone("Preencha seu telefone corretamente")
      error = true;
    }

    return !error
  }

  const salvar = () => {
    if (validar()) {
      console.log("Salvou")
    }
  }

  return (
    <KeyboardAvoidingView
      behavior = {Platform.OS  == "ios" ? "padding" : "height"}
      style={[styles.container, specificStyle.specificContainer]}
      keyboardVerticalOffset = {80}
    >
        <ScrollView style={{width: '100%'}}>
          <Text h4>Cadastre-se</Text>

          <Input
            placeholder = 'E-mail'
            onChangeText = {value => {
              setEmail(value)
              setErrorEmail(null)
            }}
            keyboardType = 'email-adress'
            errorMessage = {erroEmail}
          ></Input>

          <Input
            placeholder = 'Nome'
            onChangeText = {value => {
              setNome(value)
              setErrorNome(null)
            }}
            errorMessage = {erroNome}
          ></Input>

          <View style = {styles.containerMask}>
            <TextInputMask
              placeholder = 'Cpf'
              type = {'cpf'}
              value = {cpf}

              onChangeText = {value => {
                setCpf(value)
                setErrorCpf(null)
              }}
              keyboardType = 'number-pad'
              returnKeyType = 'done'
              style = {styles.maskedInput}
              ref = {(ref) => cpffield = ref}
            />
          </View>
          <Text style = {styles.errorMessage}>{erroCpf}</Text>

          <View style = {styles.containerMask}>
            <TextInputMask
              placeholder = 'Telefone'
              type = {'cel-phone'}
              options = {{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value = {telefone}
              onChangeText = {value => setTelefone(value)}
              keyboardType = 'phone-pad'
              returnKeyType = 'done'
              style = {styles.maskedInput}
              ref = {(ref) => telefonefield = ref}
            />
          </View>
          <Text style = {styles.errorMessage}>{erroTelefone}</Text>

          <CheckBox
            title = "Eu aceito os termos de uso e privacidade"
            checkedIcon = "check"
            uncheckedIcon = "square-o"
            checkedColor = 'green'
            uncheckedColor = 'red'
            checked = {isSelected}

            onPress = {() => setSelected(!isSelected)}
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
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff",
      padding: 10,
      paddingTop: 15
    },
    button: {
      marginTop: 10
    }
  })