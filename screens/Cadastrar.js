import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { Alert, StyleSheet } from 'react-native';
export default function Cadastrar({navigation}) {

    function cadastrarServico(){
      navigation.navigate("CadastroServico")
    }

    function cadastrarProduto(){
      navigation.navigate("CadastroProduto")
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>O que você quer cadastrar?</Text>
        <Button
            icon={
              <Icon
                name="child"
                size={15}
                color="white"
              />
            }
            buttonStyle={specificStyle.button}
            title=" Cadastrar serviço"
            onPress={() => cadastrarServico()}
          />
        <Button
            icon={
              <Icon
                name="shopping-bag"
                size={15}
                color="white"
              />
            }
            title=" Cadastrar produto"
            buttonStyle={specificStyle.button}
            onPress={() => cadastrarProduto()}
          />
      </View>
    );
  }

const specificStyle = StyleSheet.create({
  button: {
    marginTop: 10
  }
})