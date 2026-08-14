import { ImageSourcePropType, Text, View, StyleSheet, ScrollView } from "react-native";
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

const PlaceholderImage = require('@/assets/images/darksouldois.jpg');

export default function Index() {

  const [selectedImage, setSelectedImage] =
    useState<string | undefined>(undefined);

  const [showAppOptions, setShowAppOptions] =
    useState<boolean>(false);

  const [isModalVisible, setIsModalVisible] =
    useState<boolean>(false);

  const [pickedEmoji, setPickedEmoji] =
    useState<ImageSourcePropType | undefined>(undefined);

  const [status, requestPermission] =
    MediaLibrary.usePermissions();

  const imageRef = useRef<any>(null);

  const pickImageAsync = async () => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (status === null) {
      requestPermission();
    }

    if (!result.canceled) {

      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);

    } else {

      alert('Nenhuma imagem selecionada.');

    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {

    try {

      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);

      alert('Imagem salva com sucesso!');

    } catch (e) {

      console.log(e);

    }
  };

  return (

    <GestureHandlerRootView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* IMAGEM */}

        <View style={styles.imageContainer}>

          <View
            ref={imageRef}
            collapsable={false}
          >

            <ImageViewer
              imgSource={PlaceholderImage}
              selectedImage={selectedImage}
            />

            {pickedEmoji && (
              <EmojiSticker
                imageSize={40}
                stickerSource={pickedEmoji}
              />
            )}

          </View>

        </View>


        {/* BOTÕES */}

        {showAppOptions ? (

          <View style={styles.optionsContainer}>

            <View style={styles.optionsRow}>

              <IconButton
                icon="refresh"
                label="Atualizar"
                onPress={onReset}
              />

              <CircleButton
                onPress={onAddSticker}
              />

              <IconButton
                icon="save-alt"
                label="Salvar"
                onPress={onSaveImageAsync}
              />

            </View>

          </View>

        ) : (

          <View style={styles.footerContainer}>

            <Button
              theme="primary"
              label="Escolher imagem"
              onPress={pickImageAsync}
            />

            <Button
              label="Usar esta imagem"
              onPress={() => setShowAppOptions(true)}
            />

          </View>

        )}


        {/* EMOJIS */}

        <EmojiPicker
          isVisible={isModalVisible}
          onClose={onModalClose}
        >

          <EmojiList
            onSelect={setPickedEmoji}
            onCloseModal={onModalClose}
          />

        </EmojiPicker>


        {/* TÍTULO */}

        <View style={styles.content}>

          <Text style={styles.titulo}>
            ⚔️ Bem-vindo, Maculado!
          </Text>

          <Text style={styles.descricao}>
            Explore o mundo dos jogos Souls
          </Text>

          <View style={styles.divisor} />


          {/* RANKING */}

          <Text style={styles.subtitulo}>
            🏆 Ranking de dificuldade
          </Text>

          <Text style={styles.ordem}>
            Mais difícil → Mais fácil
          </Text>


          <View style={styles.lista}>

            <Text style={styles.text}>
              💀 1. Dark Souls II
            </Text>

            <Text style={styles.text}>
              ⚔️ 2. Dark Souls III
            </Text>

            <Text style={styles.text}>
              🩸 3. Dark Souls I
            </Text>

            <Text style={styles.text}>
              🦇 4. Bloodborne
            </Text>

            <Text style={styles.text}>
              🛡️ 5. Demon's Souls
            </Text>

            <Text style={styles.text}>
              🐉 6. Elden Ring
            </Text>

            <Text style={styles.text}>
              ⚡ 7. Sekiro: Shadows Die Twice
            </Text>

          </View>


          <Text style={styles.frase}>
            "Prepare-se para morrer... e tentar novamente."
          </Text>

        </View>

      </ScrollView>

    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#080808',
  },

  scrollContent: {
    paddingBottom: 40,
  },

  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
  },

  footerContainer: {
    alignItems: 'center',
    marginTop: 15,
    gap: 10,
  },

  content: {
    paddingHorizontal: 25,
    paddingTop: 25,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },

  descricao: {
    color: '#888888',
    fontSize: 15,
    textAlign: 'center',
  },

  divisor: {
    height: 1,
    backgroundColor: '#292929',
    marginVertical: 18,
  },

  subtitulo: {
    color: '#eeeeee',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 5,
  },

  ordem: {
    color: '#666666',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 15,
  },

  lista: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#252525',
    borderRadius: 12,
    padding: 16,
  },

  text: {
    color: '#cccccc',
    fontSize: 15,
    marginBottom: 12,
  },

  frase: {
    color: '#555555',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
  },

  optionsContainer: {
    alignItems: 'center',
    marginTop: 15,
  },

  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },

});