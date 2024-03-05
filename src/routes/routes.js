import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importe o Drawer Navigator
import { FontAwesome5 } from '@expo/vector-icons'; 
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import TelaInicial from '../pages/TelaInicial';
import Titulos from '../pages/Titulos';
import OrigemFlamengo from '../pages/OrigemFlamengo';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator(); // Crie o Drawer Navigator

// Criando o componente de Tabs
function Tabs(){
  return(
    <Tab.Navigator >
      
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor:'red'
          },
          tabBarIcon: ({ red, size }) => (
            <FontAwesome5 name="lock" size={size} color={red} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: "Cadastro",
          headerStyle: {
            backgroundColor: 'red'
          },
          tabBarIcon: ({ black, size }) => (
            <FontAwesome5 name="user-plus" size={size} color={black} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Componente principal que terá todas as rotas da aplicação
export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Tabs} />
        <Drawer.Screen name="Inicio" component={TelaInicial} />
        <Drawer.Screen name="Titulos" component={Titulos} />
        <Drawer.Screen name="Origem" component={OrigemFlamengo} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
