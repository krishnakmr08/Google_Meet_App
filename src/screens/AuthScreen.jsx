import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, darkColors } from '../utils/constants';
const IMAGE_HEIGHT = 250;
const IMAGE_MIN_HEIGHT = 150;
import authStyles from '../styles/authStyles';
import { resetAndNavigate } from '../utils/NavigationUtils';

const DismissKeyBoard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const AuthScreen = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(new Animated.Value(IMAGE_HEIGHT)).current;
  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      keyboardWillHide,
    );

    return () => {
      keyboardWillHideSub.remove();
      keyboardWillShowSub.remove();
    };
  }, []);

  const keyboardWillShow = event => {
    Animated.timing(imageRef, {
      toValue: IMAGE_MIN_HEIGHT,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const keyboardWillHide = event => {
    Animated.timing(imageRef, {
      toValue: IMAGE_HEIGHT,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('HomeScreen');
    }, 500);
  };

  return (
    <DismissKeyBoard>
      <View style={authStyles.container}>
        <SafeAreaView style={authStyles.SubHeader}>
          <Text style={authStyles.headerText}>Google Meet</Text>
        </SafeAreaView>
        <View>
          <Animated.View style={authStyles.animatedContainer}>
            <Animated.Image
              source={require('../assets/icons/people.png')}
              style={[authStyles.meetIcon, { height: imageRef }]}
            />
          </Animated.View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={authStyles.msgText}>
            Get started with your work, school, or {'\n '} personal Google
            account
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              value={phone}
              onChangeText={phone => setPhone(phone.slice(0, 10))}
              style={authStyles.input}
              placeholder="Enter phone number "
              placeholderTextColor={darkColors[1]}
              autoFocus={true}
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={[
                authStyles.button,
                {
                  backgroundColor:
                    phone.length === 10 ? Colors.primary : darkColors[3],
                },
              ]}
              activeOpacity={0.8}
              disabled={phone.length != 10}
              onPress={handleLogin}
            >
              {loading ? (
                <ActivityIndicator size={'small'} color={'white'} />
              ) : (
                <Text style={authStyles.text}>Next</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DismissKeyBoard>
  );
};

export default AuthScreen;
