import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function TelaInicial() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao App do Flamengo!</Text>
        <Image
          source={{
            uri: "https://s2-extra.glbimg.com/sTdDk2I1u0qsDZBooql5yTJLON8=/0x0:1551x1000/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/3/f/KM0lAETBApxnu9TYMQAQ/gabigol-e-zico.jpg"}}
          style={styles.logo}
        />
        <Text style={styles.paragraph}>
          Prepare-se para mergulhar na história gloriosa e apaixonante do Clube de Regatas do Flamengo. Nosso aplicativo é o seu guia definitivo para acompanhar de perto a trajetória vitoriosa do Mengão na Copa Libertadores da América. {"\n\n"}
          Descubra a Campanha Vitoriosa: Explore os detalhes emocionantes e as vitórias memoráveis que moldaram a jornada do Flamengo rumo à glória continental. Reviva os momentos épicos e as conquistas inesquecíveis que fizeram história nos gramados sul-americanos. {"\n\n"}
          Conheça os Artilheiros Imortais: Conheça os heróis que marcaram seus nomes nos corações dos torcedores rubro-negros com suas performances arrebatadoras. Saiba mais sobre os artilheiros lendários que deixaram sua marca na história do Flamengo e da Copa Libertadores. {"\n\n"}
          Mergulhe na Paixão Rubro-Negra: Prepare-se para uma experiência única e emocionante enquanto exploramos juntos a paixão e o orgulho que envolvem o universo do Flamengo. Esteja pronto para vibrar, se emocionar e celebrar cada momento dessa jornada inigualável. {"\n\n"}
          Seja bem-vindo ao App do Flamengo, onde a história é escrita com as cores rubro-negras e a paixão pelo futebol é eterna!
        </Text>
        <Text style={styles.slogan}>Mengão até morrer!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#ff0000', // Vermelho do Flamengo
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: '#ffffff', // Branco para contraste
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: '#ffffff', // Branco para contraste
  },
  paragraph: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
    color: '#ffffff', // Branco para contraste
  },
  slogan: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: '#ffffff', // Branco para contraste
  },
});
