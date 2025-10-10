import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { screenWidth } from '../../utils/constants';
import { useUserStore } from '../../service/userStore';
import { Send } from 'lucide-react-native';

import { RFValue } from 'react-native-responsive-fontsize';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { user } = useUserStore();

  return (
    <KeyboardAvoidingView
      style={{ borderTopWidth: 1, borderTopColor: '#9197a6' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={145}
    >
      <View style={styles.container}>
        <Image source={{ uri: user.photo }} style={styles.img} />
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            onChange={setMessage}
            placeholder="Add a message..."
            style={styles.input}
            placeholderTextColor="#fff"
            multiline={true}
          />
          <TouchableOpacity >
            <Send color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 15 : 4,
    backgroundColor: '#1f1f1f',
  },
  img: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: (screenWidth * 0.12) / 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#444',
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 5,
    justifyContent: 'space-between',
    borderRadius: 40,
  },
  input: {
    color: '#fff',
    fontSize: RFValue(12),
    width: '90%',
  },
});
