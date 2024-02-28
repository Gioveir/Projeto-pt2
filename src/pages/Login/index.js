import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import Titulo from '../../components/Titulo';
import MeuInput from '../../components/input';
import SuperButton from '../../components/SuperButton';

export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Lógica para lidar com a recuperação de senha
    console.log('Link para recuperar a senha clicado');
    setModalVisible(true); // Abrir o modal
  };

  const handleSubmit = () => {
    // Lógica para enviar o email de recuperação de senha
    console.log('Email enviado para recuperação de senha:', email);
    // Fechar o modal após o envio do email
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Titulo titulo="Login" />
      <MeuInput label="E-mail" placeholder="exemplo@exemplo.com" />
      <MeuInput label="Senha" placeholder="123456" />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <SuperButton valor="Entrar" />

      {/* Modal para recuperação de senha */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Recuperar Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              onChangeText={setEmail}
              value={email}
            />
            <View style={styles.buttonContainer}>
              <Button title="Enviar" onPress={handleSubmit} />
              <Button title="Fechar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'BLACK',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 10
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 20,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth:1,
    height:42,
    marginBottom:15,
    marginTop:3,
    padding:12,
    width:300
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Margem superior entre os botões
  },
});
