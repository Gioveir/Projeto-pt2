import { StyleSheet, View } from 'react-native';
import Titulo from '../../components/Titulo';
import MeuInput from '../../components/input';
import SuperButton from '../../components/SuperButton';


export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Titulo titulo="Cadastro"/>
      <MeuInput 
      label= "E-mail"   
      placeholder="exemplo@exemplo.com"/>

      <MeuInput 
      label= "Senha"   
      placeholder="123456"/>

      
      {/* <MeuButton titulo="Entrar"/> */}

      <SuperButton valor = "Entrar">
        
      </SuperButton>


    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});