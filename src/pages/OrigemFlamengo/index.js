import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function OrigemFlamengo() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Origem do Flamengo</Text>
        <Image
          source={{
            uri: "https://i.makeagif.com/media/10-22-2022/6bJyyS.gif",
          }}
          style={styles.image}
        />
        <Text style={styles.description}>
          O Clube de Regatas do Flamengo foi fundado no dia 17 de novembro de 1895, no bairro do Flamengo, na cidade do Rio de Janeiro. Sua origem remonta a um grupo de remadores que se reuniram para formar um clube dedicado às atividades náuticas. A paixão pelo esporte cresceu rapidamente, e o Flamengo logo se tornou uma das instituições esportivas mais importantes do país.
        </Text>
        <Text style={styles.history}>
          Ao longo dos anos, o Flamengo expandiu suas atividades para além do remo, incluindo o futebol, o basquete, o vôlei e outras modalidades esportivas. Com uma base sólida de torcedores apaixonados, o clube se tornou um símbolo do esporte brasileiro e conquistou inúmeros títulos e troféus ao longo de sua história.
        </Text>
        <Text style={styles.conclusion}>
          A origem do Flamengo está profundamente enraizada na história do Rio de Janeiro e do Brasil. Desde sua fundação, o clube tem sido uma fonte de orgulho para seus torcedores e uma influência positiva no cenário esportivo nacional.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FF0000', // Vermelho do Flamengo
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff', // Preto
  },
  description: {
    marginTop:20,
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
    color: '#ffffff', 
  },
  history: {
    marginTop:20,
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
    color: '#ffffff', 
  },
  conclusion: {
    marginTop:20,
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
    color: '#ffffff', 
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 20,
    resizeMode: 'cover',
  },
});
