import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Titulos() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Títulos da Libertadores</Text>
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/FgRR5Y6WIAA4a_S?format=jpg&name=4096x4096",
          }}
          style={styles.image}
        />
        <Text style={styles.paragraph}>
          O Clube de Regatas do Flamengo possui uma história gloriosa na Copa Libertadores da América, o torneio mais importante do continente sul-americano. Desde sua primeira conquista em 1981 até a mais recente em 2019, o Flamengo deixou sua marca na competição com campanhas vitoriosas e emocionantes.
        </Text>
        <Text style={styles.subtitle}>Conquistas do Flamengo na Libertadores:</Text>
        <Text style={styles.paragraph}>
          - 1981: O Flamengo conquista sua primeira Libertadores em uma campanha memorável, culminando com uma vitória na final sobre o Cobreloa, do Chile.
        </Text>
        <Text style={styles.paragraph}>
          - 2019: Após 38 anos, o Flamengo volta a conquistar a Libertadores, com uma campanha impressionante e uma vitória emocionante na final sobre o River Plate, da Argentina.
        </Text>
        <Text style={styles.paragraph}>
          - 2022: Em uma jornada histórica, o Flamengo conquista sua terceira Libertadores. A campanha foi repleta de jogos emocionantes e momentos inesquecíveis, culminando em uma final eletrizante contra o Palmeiras, onde o Mengão sagrou-se campeão, garantindo mais uma vez seu lugar entre os maiores clubes da América do Sul.
        </Text>
        <Text style={styles.paragraph}>
          Essas são apenas algumas das conquistas marcantes do Flamengo na Copa Libertadores da América. A história do clube na competição é repleta de momentos inesquecíveis e conquistas que ficarão para sempre na memória dos torcedores rubro-negros.
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
    marginTop:20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF', // Branco para contraste
  },
  
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#FFFFFF', // Branco para contraste
  },
  paragraph: {
    marginTop:20,
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
    color: '#ffffff', // Branco para contraste
  },
  conclusion: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
    color: '#FFFFFF', // Branco para contraste
  },
  image: {
    width: 330,
    height: 600,
    marginTop: 20,
    resizeMode: 'cover',
  },
});
