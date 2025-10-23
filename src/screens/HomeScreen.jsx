import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { homeStyles } from '../styles/homeStyles';
import HomeHeader from '../components/home/HomeHeader';
import { navigate } from '../utils/NavigationUtils';
import { RFValue } from 'react-native-responsive-fontsize';
import { Calendar, Video } from 'lucide-react-native';
import { useUserStore } from '../service/userStore';
import { useWS } from '../service/api/WSProvider';
import { Colors } from '../utils/constants';
import { removeHyphens, addHyphens } from '../utils/Helpers';
import { useLiveMeetStore } from '../service/meetStore';
import { checkSession } from '../service/api/session';
const HomeScreen = () => {
  const { emit } = useWS();
  const { user, sessions, addSession, removeSession } = useUserStore();
  const { addSessionId, removeSessionId } = useLiveMeetStore();
  const handleNavigation = () => {
    const storedName = user?.name;
    if (!storedName) {
      Alert.alert('Fill your details first to proceed');
      return;
    }
    navigate('JoinMeetScreen');
  };

  const joinViaSessionId = async (id) => {
    const storedName = user?.name;
    if (!storedName) {
      Alert.alert('Fill your details first to proceed');
      return;
    }

    const isAvailable = await checkSession(id);
    if (isAvailable) {
      emit('prepare-session', {
        userId: user?.id,
        sessionId: removeHyphens(id),
      });
      addSession(id);
      addSessionId(id);
      navigate('PrepareMeetScreen');
    } else {
      removeSession(id);
      removeSessionId(id);
      Alert.alert('There is no meeting found');
    }
  };

  const renderSessions = ({ item }) => {
    return (
      <View style={homeStyles.sessionContainer}>
        <Calendar size={RFValue(20)} color={Colors.text} />
        <View style={homeStyles.sessionTextContainer}>
          <Text style={homeStyles.sessionTitle}>{addHyphens(item)}</Text>
          <Text style={homeStyles.sessionTime}>Just join and enjoy party!</Text>
        </View>
        <TouchableOpacity
          style={homeStyles.joinButton}
          onPress={() => joinViaSessionId(item)}
        >
          <Text style={homeStyles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={homeStyles.container}>
      <HomeHeader />

      <FlatList
        data={sessions}
        renderItem={renderSessions}
        key={item => item}
        contentContainerStyle={{ paddingVertical: 15 }}
        ListEmptyComponent={
          <>
            <Image
              source={require('../assets/images/bg.png')}
              style={homeStyles.img}
            />
            <Text style={homeStyles.title}>
              Video calls and meetings  for {'\n'} everyone
            </Text>
            <Text style={homeStyles.subTitle}>
              Connect, collaborate, and celebrate from {'\n'} anywhere with
              Google Meet
            </Text>
          </>
        }
      />
      <TouchableOpacity
        style={homeStyles.absoluteButton}
        onPress={handleNavigation}
      >
        <Video size={RFValue(14)} color="#ffffff" />
        <Text style={homeStyles.buttonText}>Join </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
