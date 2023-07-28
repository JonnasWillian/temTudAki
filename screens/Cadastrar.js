import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import styles from '../mainStyle';

export default function Cadastrar(navigation) {

  function cadastrarServico(){
    navigation.navigate('CadastroServico')
  }
  function cadastrarProduto(){
    navigation.navigate('CadastroProduto')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>O que você quer cadastrar ?</Text>
      <Button
      icon = {
        <Icon
        //right-to-bracket
          name = "child"
          size = {15}
          color = {"white"}
        />
      } title = "Cadastrar Servico"
      onPress = {() => cadastrarServico()}/>
      <Button
      icon = {
        <Icon
        //right-to-bracket
          name = "shopping-bag"
          size = {15}
          color = {"white"}
        />
      } title = "Cadastrar Produto"
      style={styles.button}
      onPress = {() => cadastrarProduto()}/>
    </View>
  );
}