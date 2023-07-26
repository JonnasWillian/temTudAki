import * as React from 'react';
import { Text, View } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'bootstrap';

export default function Perfil() {

    const logout = (navigation) => {
        AsyncStorage.removeItem("TOKEN").then(() => {
            navigation.reset({
              index: 0,
              routes:[{name: "Login"}]
            })  
        }).catch (() => {
            Alert.alert("Erro ao sair")
        })
      }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        <Button
          icon = {
            <Icon
            //right-to-bracket
              name = "arrow-circle-right"
              size = {15}
              buttonStyle={specificStyle.button}
              color = {"white"}
            />
          } title = "Sair"
          onPress = {() => logout()}/>
      </View>
    );
  }