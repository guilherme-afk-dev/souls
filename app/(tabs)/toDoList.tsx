import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '@/hooks/useTarefas';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Jogos</Text>

            <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o nome de um Jogo..."
                  placeholderTextColor="gray"
                  value={novaTarefa}
                  onChangeText={setNovaTarefa}
                  />
            </View>
            <Button title="Adicionar" onPress={adicionarTarefa} color='#636363'/>
        
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarefaContainer}>
                <Text style={styles.tarefaTexto}>{item.texto}</Text>
                <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                    <Text style={styles.remover}>X</Text>
                </TouchableOpacity>
            </View>
          )}
       />
     </View>
   );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#000000' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#fff'},
    inputContainer: { flexDirection: 'row', marginBottom: 10},
    input: { flex: 1, borderWidth: 1, borderColor: '#ffee00', padding: 10, borderRadius: 5, marginRight: 10, color: '#fff'},
    tarefaContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#838383', padding: 15,
        marginBottom: 5, borderRadius: 5, shadowColor: 'rgb(126, 0, 126)', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2},
    tarefaTexto: { fontSize: 16 },
    remover: { fontSize: 18, color: 'red' },
});
