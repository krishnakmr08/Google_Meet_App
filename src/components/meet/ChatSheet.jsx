import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { screenHeight } from '../../utils/constants';
import MessageInput from './MessageInput';
import { comments } from '../../../dummyData';

const ChatSheet = () => {
  return (
    <ActionSheet
      containerStyle={styles.container}
      headerAlwaysVisible={true}
      indicatorStyle={styles.indicator}
      keyboardHandlerEnabled={false}
      gestureEnabled={Platform.OS === 'ios' ? true : false}
    >
      <Text style={styles.header}>Meeting Chat</Text>
      <View style={styles.divider} />
      <FlatList style={{ height: '80%', marginTop: 10 }} />
      <MessageInput />
    </ActionSheet>
  );
};

export default ChatSheet;

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.8,
    backgroundColor: '#121212',
  },
  indicator: {
    height: 2,
    width: 30,
    top: 2,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: '700',
  },
  divider: {
    height: 0.2,
    width: '100%',
    backgroundColor: '#9197a6',
  },
});
