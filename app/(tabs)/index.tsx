import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🤓</Text>
      <Link href="/about" style={styles.button}>Vai para o Sobre</Link>
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
      
      text: {
        color: '#ff0000',
        fontSize: 40,
        fontWeight: 'bold',
      },

      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#8c05fa',
      }
    });