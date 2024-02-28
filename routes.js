// inicio da configuração 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; // Importe os ícones FontAwesome5
const Tab = createBottomTabNavigator();
// Fim da configuração 

// Inicio da importação das paginas 
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
// Fim da importação das paginas 


// Criando  o componente de Tabs
function Tabs(){
  return(
    <Tab.Navigator>

        <Tab.Screen></Tab.Screen>
        
    </Tab.Navigator>
  )
}
// Fim 


//Criando o componente que terá todas as rotas da aplicação
export default function Router() {
  return (
    <NavigationContainer >


<Tab.Navigator initialRouteName='Login'>
  <Tab.Screen
    name="Login"
    component={Login}
    options={{
      title: "Login",
      headerStyle: {
        backgroundColor:'rgb(126 ,87 ,194)'
      },
      tabBarIcon: ({ color, size }) => ( // Adicione um ícone à guia de Login
        <FontAwesome5 name="lock" size={size} color={color} /> // Ícone de cadeado
      ),
    }}
  >
  </Tab.Screen>

  <Tab.Screen
    name="Cadastro"
    component={Cadastro}
    options={{
      title: "Cadastro",
      headerStyle: {
        backgroundColor: 'rgb(126 ,87 ,194)'
      },
      tabBarIcon: ({ color, size }) => ( // Adicione um ícone à guia de Cadastro
        <FontAwesome5 name="user-plus" size={size} color={color} /> // Ícone de pessoa se cadastrando
      ),
    }}
  >
  </Tab.Screen>
  </Tab.Navigator>
    </NavigationContainer>
  );

}
