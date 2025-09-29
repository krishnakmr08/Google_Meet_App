import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ActionSheet from 'react-native-actions-sheet';
import { screenHeight } from '../../utils/constants';


import MessageText from './MessageText';

const ChatSheet = () => {
  return (
    <ActionSheet
      containerStyle={styles.container}
      headerAlwaysVisible={true}
      indicatorStyle={styles.indicator}
      keyboardHandlerEnabled={false}
    >
      <Text style={styles.text}>Meeting Chat</Text>
      <View style={styles.divider} />
      <View style={{ height: '80%' }}></View>

      <MessageText />
    </ActionSheet>
  );
};

export default ChatSheet;

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.7,
    backgroundColor: '#121212',
  },
  indicator: {
    height: 2,
    width: 30,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    marginVertical: 15,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#9197a6',
  },
});
