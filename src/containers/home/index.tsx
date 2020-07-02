import React from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const testText = `Welcome
to Sofaster!`;

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/sofaster_welcome_screen.png')}
        style={styles.image}>
        <View style={styles.textBox}>
          <Text style={styles.text}>{testText}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
