import React from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { useTarefas } from '@/hooks/useTarefas';

export default function App() {
    const {
        tarefas,
        novaTarefa,
        setNovaTarefa,
        adicionarTarefa,
        removerTarefa
    } = useTarefas();

    return (
        <View style={styles.container}>

            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.titulo}>Saguão de Jogos</Text>

                <Text style={styles.subtitulo}>
                    Seus jogos...
                </Text>
            </View>

            {/* Campo para adicionar jogo */}
            <View style={styles.inputArea}>

                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do jogo"
                    placeholderTextColor="#666"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={adicionarTarefa}
                    activeOpacity={0.7}
                >
                    <Text style={styles.botaoTexto}>
                        ADICIONAR
                    </Text>
                </TouchableOpacity>

            </View>

            {/* Lista */}
            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.lista}
                ListEmptyComponent={
                    <Text style={styles.vazio}>
                        Nenhum jogo adicionado.
                    </Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.jogo}>

                        <View style={styles.jogoInfo}>
                            <Text style={styles.jogoTexto}>
                                {item.texto}
                            </Text>

                            <Text style={styles.tipo}>
                                SOULS / SOULS-LIKE
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.removerBotao}
                            onPress={() => removerTarefa(item.id)}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.remover}>
                                ×
                            </Text>
                        </TouchableOpacity>

                    </View>
                )}
            />

            <Text style={styles.rodape}>
                Sua coleção de jogos
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#090909',
        paddingHorizontal: 20,
        paddingTop: 60,
    },

    header: {
        marginBottom: 30,
    },

    titulo: {
        color: '#f5f5f5',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 6,
    },

    subtitulo: {
        color: '#777',
        fontSize: 15,
    },

    inputArea: {
        width: '100%',
        marginBottom: 25,
    },

    input: {
        height: 52,
        backgroundColor: '#151515',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 16,
        color: '#fff',
        fontSize: 15,
        marginBottom: 12,
    },

    botao: {
        height: 50,
        backgroundColor: '#3d3d3d',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoTexto: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 1,
    },

    lista: {
        paddingBottom: 20,
    },

    jogo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#151515',
        borderWidth: 1,
        borderColor: '#282828',
        borderRadius: 10,
        padding: 17,
        marginBottom: 10,
    },

    jogoInfo: {
        flex: 1,
    },

    jogoTexto: {
        color: '#eee',
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 5,
    },

    tipo: {
        color: '#666',
        fontSize: 11,
        letterSpacing: 1,
    },

    removerBotao: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
    },

    remover: {
        color: '#aaa',
        fontSize: 23,
        fontWeight: '300',
    },

    vazio: {
        color: '#555',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 14,
    },

    rodape: {
        color: '#444',
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 15,
    },
});