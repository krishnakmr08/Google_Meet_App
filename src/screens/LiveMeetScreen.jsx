import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import { useContainerDimensions } from '../hooks/useContainerDimensions';
import { useWebRTC } from '../hooks/useWebRTC';
import MeetHeader from '../components/meet/MeetHeader';
import UserView from '../components/meet/UserView';
import NoUserInvite from '../components/meet/NoUserInvite';
import MeetFooter from '../components/meet/MeetFooter';
import People from '../components/meet/People';

const LiveMeetScreen = () => {
  const { containerDimensions, onContainerLayout } = useContainerDimensions();
  const { participants, localStream, toggleMic, toggleVideo, switchCamera } =
    useWebRTC();
  return (
    <View style={styles.container}>
      <MeetHeader switchCamera={switchCamera} />

      <View style={styles.peopleContainer} onLayout={onContainerLayout}>
        {containerDimensions && localStream && (
          <UserView
            localStream={localStream}
            containerDimensions={containerDimensions}
          />
        )}

        {participants?.length > 0 ? (
          <People
            people={participants}
            containerDimensions={containerDimensions}
          />
        ) : (
          <NoUserInvite />
        )}
      </View>

      <MeetFooter toggleMic={toggleMic} toggleVideo={toggleVideo} />
    </View>
  );
};

export default LiveMeetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  peopleContainer: {
    flex: 1,
  },
  chatIcon: {
    position: 'absolute',
    top: 60,
    right: 100,
  },
});
