import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { screenHeight } from '../../utils/constants';
import MessageInput from './MessageInput';
import { useEffect, useState } from 'react';
import { useUserStore } from '../../service/userStore';
import axios from 'axios';
const MessageSeparator = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 10,
        marginBottom: 8,
      }}
    />
  );
};

const EmptyChat = () => {
  return (
    <View style={{ paddingTop: 60 }}>
      <Image
        source={require('../../assets/images/chat.png')}
        resizeMode="contain"
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: '800',
          color: '#FFF',
          textAlign: 'center',
        }}
      >
        Start a new conversation ✨
      </Text>
    </View>
  );
};

const renderItem = ({ item, user }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginVertical: 8,
      }}
    >
      <Image
        source={{ uri: user?.photo }}
        style={{ width: 50, height: 50, borderRadius: 30 }}
      />
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: '#FFF',
            marginBottom: 5,
          }}
        >
          {user?.name}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#FFF' }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

const ChatSheet = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useUserStore();

  const getTodos = async () => {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    setMessages(result.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

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
      <FlatList
        style={{ height: '80%', marginTop: 10 }}
        data={messages}
        renderItem={({ item }) => renderItem({ item, user })}
        ListEmptyComponent={EmptyChat}
        ItemSeparatorComponent={MessageSeparator}
        keyExtractor={item => item.id}
      />
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
