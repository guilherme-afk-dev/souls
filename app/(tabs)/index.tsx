import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sejam Bem-Vindos!</Text>

      <Text style={styles.subtitulo}>
        Ordem Souls (Mais difícil → Mais fácil)
      </Text>

      <Text style={styles.text}>1. Sekiro: Shadows Die Twice</Text>
      <Text style={styles.text}>2. Dark Souls II</Text>
      <Text style={styles.text}>3. Dark Souls III</Text>
      <Text style={styles.text}>4. Bloodborne</Text>
      <Text style={styles.text}>5. Elden Ring</Text>
      <Text style={styles.text}>6. Dark Souls</Text>
      <Text style={styles.text}>7. Demon's Souls</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitulo: {
    color: '#aaaaaa',
    fontSize: 18,
    marginBottom: 20,
  },

  text: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 5,
  },
});