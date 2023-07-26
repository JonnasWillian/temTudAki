import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Perfil from './Perfil';
import Busca from './Busca';
import Produtos from './Produtos';
import Servicos from './Servicos';
import Cadastrar from './Cadastrar';

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Busca"
        component={Busca}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Servicos"
        component={Servicos}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human-greeting" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Perfil}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}