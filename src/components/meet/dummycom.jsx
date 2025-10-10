import {
  Animated,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { screenHeight, screenWidth } from '../../utils/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useUserStore } from '../../service/userStore';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const {user} = useUserStore()
  return (
    <View style={{borderTopColor :"#FFF",marginTop : 2,borderTopWidth : 1 }}>
      <View style={styles.container}>
        <Image source={{uri : user.photo}} style={styles.img}/>
        <View style={styles.inputContainer}>
          <TextInput
           />
        </View>
      </View>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderTopWidth: 1,
    borderTopColor: '#9197a6',
    backgroundColor: '#1f1f1f',
  },
  img: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: (screenWidth * 0.12) / 2,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: screenHeight * 0.06,
    borderRadius: 30,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#444',
    marginVertical: 10,
    fontFamily: 'Okra-ExtraBold',
  },
  input: {
    flex: 1,
    fontSize: RFValue(12),
    color: '#fff',
    paddingVertical: 8,
  },
  sendBtn: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
