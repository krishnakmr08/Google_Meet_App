import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { screenWidth, screenHeight } from '../utils/constants';
import { resetAndNavigate } from '../utils/NavigationUtils';

const SplashScreen = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('AuthScreen');
    }, 1200);

    return () => clearTimeout(timeoutId);
  });
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/meet.png')}
        style={styles.icon}
      />
      <Image
        source={require('../assets/icons/workspace.png')}
        style={styles.googleIcon}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.8,
    resizeMode: 'contain',
  },
  googleIcon: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 20,
  },
});
