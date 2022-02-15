import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardImage = ({ image, searchTerm }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.cardImage} 
      onPress={() => navigation.navigate('ImageScreen', { image, searchTerm })}
      >
      <Image
        source={{
            uri: 
              image.src.portrait 
              ? image.src.portrait 
              : 'https://xn--80aadc3bb0afph5eue.xn--p1ai/images/no_photo.png'
        }}
        style={{ height: 180, width: '100%' }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardImage: {
    display: 'flex',
    width: '49%',
    margin: 4,
    justifyContent: 'space-between',
    backgroundColor: '#2c292c',
    borderWidth: 0,
    borderRadius: 5
  }
})

export default CardImage;