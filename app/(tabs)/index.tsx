import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('@/assets/images/darksouldois.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
          <Button label="Use this photo" />
        </View>


      <Text style={styles.titulo}>Sejam Bem-Vindos!</Text>

      <Text style={styles.subtitulo}>
        Ordem Souls (Mais difícil → Mais fácil)
      </Text>

      <Text style={styles.text}>1. Dark Souls II</Text>
      <Text style={styles.text}>2. Dark Souls III</Text>
      <Text style={styles.text}>3. Dark Souls I</Text>
      <Text style={styles.text}>4. Bloodborne</Text>
      <Text style={styles.text}>5. Demon Souls</Text>
      <Text style={styles.text}>6. Elden Ring</Text>
      <Text style={styles.text}>7. Sekiro: Shadows Die Twice</Text>
      
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
  imageContainer: {
    flex: 1,
  },

  footerContainer : {
    flex: 1 / 3,
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 600,
    borderRadius: 18,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitulo: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 20,
  },

  text: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 5,
  },
});