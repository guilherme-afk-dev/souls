import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>⚔️ Sobre o App</Text>

        <Text style={styles.descricao}>
          Um aplicativo dedicado aos jogos Souls e Souls-like,
          criado para reunir informações e ajudar você a conhecer
          grandes títulos desse gênero.
        </Text>
      </View>

      <View style={styles.divisor} />

      {/* Desenvolvedor */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          👤 Desenvolvedor
        </Text>

        <Text style={styles.texto}>
          Guilherme
        </Text>
      </View>

      {/* Objetivo */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          🎮 Objetivo
        </Text>

        <Text style={styles.texto}>
          Organizar e apresentar jogos Souls e Souls-like
          de forma simples, organizada e fácil de consultar.
        </Text>
      </View>

      {/* Tecnologia */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          💻 Tecnologia
        </Text>

        <Text style={styles.texto}>
          React Native
        </Text>

        <Text style={styles.texto}>
          Expo
        </Text>
      </View>

      {/* Tema */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          🩸 Gênero
        </Text>

        <Text style={styles.texto}>
          Souls • Souls-like • RPG de ação
        </Text>
      </View>

      {/* Versão */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          📱 Versão
        </Text>

        <Text style={styles.texto}>
          1.0.1
        </Text>
      </View>

      <View style={styles.divisor} />

      <Text style={styles.frase}>
        "Levante-se. A jornada ainda não terminou."
      </Text>

      <Text style={styles.rodape}>
        ⚔️ Prepare-se para morrer e tentar novamente.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#080808",
  },

  content: {
    padding: 24,
    paddingTop: 50,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 10,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 15,
  },

  descricao: {
    color: "#999999",
    fontSize: 15,
    lineHeight: 23,
  },

  divisor: {
    height: 1,
    backgroundColor: "#292929",
    marginVertical: 25,
  },

  card: {
    backgroundColor: "#121212",
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
  },

  subtitulo: {
    color: "#eeeeee",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  texto: {
    color: "#999999",
    fontSize: 15,
    lineHeight: 22,
  },

  frase: {
    color: "#777777",
    fontSize: 15,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 12,
  },

  rodape: {
    color: "#555555",
    fontSize: 12,
    textAlign: "center",
  },

});