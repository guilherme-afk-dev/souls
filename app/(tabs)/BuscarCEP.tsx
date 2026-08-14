import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscaCep';

export default function BuscaCEP() {
    const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.titulo}>Consultar Servidor</Text>

                <Text style={styles.subtitulo}>
                    Informe o servidor do seu jogo (CEP).
                </Text>
            </View>

            <View style={styles.formulario}>

                <Text style={styles.label}>CEP</Text>

                <TextInput
                    style={styles.textinput}
                    value={cep}
                    onChangeText={setCep}
                    placeholder="00000-000"
                    placeholderTextColor="#666"
                    keyboardType="numeric"
                    maxLength={8}
                />

                <Pressable
                    style={styles.botao}
                    onPress={buscarCEP}
                >
                    <Text style={styles.textoBotao}>
                        CONSULTAR
                    </Text>
                </Pressable>

            </View>

            {endereco.logradouro !== '' && (
                <View style={styles.resultado}>

                    <Text style={styles.resultadoTitulo}>
                        Endereço
                    </Text>

                    <View style={styles.linha} />

                    <Text style={styles.info}>
                        <Text style={styles.negrito}>Logradouro: </Text>
                        {endereco.logradouro}
                    </Text>

                    <Text style={styles.info}>
                        <Text style={styles.negrito}>Bairro: </Text>
                        {endereco.bairro}
                    </Text>

                    <Text style={styles.info}>
                        <Text style={styles.negrito}>Cidade: </Text>
                        {endereco.localidade}
                    </Text>

                    <Text style={styles.info}>
                        <Text style={styles.negrito}>Estado: </Text>
                        {endereco.uf}
                    </Text>

                </View>
            )}

            <Text style={styles.rodape}>
                Consulta de endereço via CEP
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0b0b',
        paddingHorizontal: 24,
        paddingTop: 70,
    },

    header: {
        marginBottom: 35,
    },

    titulo: {
        color: '#f5f5f5',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 8,
    },

    subtitulo: {
        color: '#888',
        fontSize: 15,
        lineHeight: 22,
    },

    formulario: {
        width: '100%',
    },

    label: {
        color: '#ddd',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },

    textinput: {
        width: '100%',
        height: 52,
        backgroundColor: '#151515',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 16,
        color: '#fff',
        fontSize: 16,
        marginBottom: 14,
    },

    botao: {
        height: 52,
        backgroundColor: '#3a3a3a',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 1,
    },

    resultado: {
        width: '100%',
        backgroundColor: '#151515',
        borderWidth: 1,
        borderColor: '#292929',
        borderRadius: 10,
        padding: 20,
        marginTop: 30,
    },

    resultadoTitulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },

    linha: {
        height: 1,
        backgroundColor: '#292929',
        marginVertical: 15,
    },

    info: {
        color: '#aaa',
        fontSize: 15,
        marginBottom: 12,
        lineHeight: 21,
    },

    negrito: {
        color: '#ddd',
        fontWeight: '600',
    },

    rodape: {
        color: '#555',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 30,
    },
});