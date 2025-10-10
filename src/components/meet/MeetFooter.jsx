import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { footerStyles } from '../../styles/footerStyles';
import {
  MessageSquareText,
  Hand,
  Mic,
  MicOff,
  MoreVertical,
  PhoneOff,
  Video,
  VideoOff,
} from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { goBack } from '../../utils/NavigationUtils';
import { useLiveMeetStore } from '../../service/meetStore';
import { SheetManager } from 'react-native-actions-sheet';

const MeetFooter = ({ toggleMic, toggleVideo }) => {
  const { micOn, videoOn } = useLiveMeetStore();

  const getIconStyle = isActive => ({
    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : '#FFFFFF',
    borderRadius: 50,
    padding: 12,
  });

  const getIconColor = isActive => (isActive ? 'white' : 'black');
  return (
    <LinearGradient
      colors={['#000000', 'rgba(0,0,0,0.7)', 'transparent'].reverse()}
      style={footerStyles.footerContainer}
    >
      <View style={footerStyles.iconContainer}>
        <TouchableOpacity
          style={footerStyles.callEndButton}
          onPress={() => goBack()}
        >
          <PhoneOff color="white" size={RFValue(16)} />
        </TouchableOpacity>

        <TouchableOpacity
          style={getIconStyle(videoOn)}
          onPress={() => toggleVideo()}
        >
          {videoOn ? (
            <Video color={getIconColor(videoOn)} size={RFValue(14)} />
          ) : (
            <VideoOff color={getIconColor(videoOn)} size={RFValue(14)} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={getIconStyle(micOn)}
          onPress={() => toggleMic()}
        >
          {micOn ? (
            <Mic color={getIconColor(micOn)} size={RFValue(14)} />
          ) : (
            <MicOff color={getIconColor(micOn)} size={RFValue(14)} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={footerStyles.iconButton}
          onPress={() => SheetManager.show('chat-sheet')}
        >
          <MessageSquareText color="white" size={RFValue(14)} />
        </TouchableOpacity>

        <TouchableOpacity style={footerStyles.iconButton}>
          <MoreVertical color="white" size={RFValue(14)} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default MeetFooter;
