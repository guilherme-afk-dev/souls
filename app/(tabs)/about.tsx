import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function aboutScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Sobre</Text>

      <Text style={styles.descricao}>
        Este aplicativo foi criado para organizar e listar seus jogos favoritos
        de forma simples e prática.
      </Text>

      <Text style={styles.subtitulo}>Desenvolvedor</Text>
      <Text style={styles.texto}>Guilherme</Text>

      <Text style={styles.subtitulo}>Tecnologia</Text>
      <Text style={styles.texto}>React Native</Text>

      <Text style={styles.subtitulo}>Versão</Text>
      <Text style={styles.texto}>1.0.0</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descricao: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
  },
  subtitulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  texto: {
    color: '#aaa',
    fontSize: 16,
  },
});