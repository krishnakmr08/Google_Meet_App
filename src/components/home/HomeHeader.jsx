import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import InquiryModal from '../home/InquiryModel';
import { headerStyles } from '../../styles/headerStyles';
import { useUserStore } from '../../service/userStore';
import { CircleUser, Menu } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../utils/constants';
import { navigate } from '../../utils/NavigationUtils';

const HomeHeader = () => {
  const [visible, setVisible] = useState(false);
  const { user } = useUserStore();

  useEffect(() => {
    const checkUserName = () => {
      const storedName = user?.name;
      if (!storedName) {
        setVisible(true);
      }
    };
    checkUserName();
  }, []);

  const handleNavigation = () => {
    const storedName = user?.name;
    if (!storedName) {
      setVisible(true);
      return;
    }
    navigate('JoinMeetScreen');
  };

  return (
    <>
      <SafeAreaView />
      <View style={headerStyles.container}>
        <Menu name="menu" size={RFValue(20)} color={Colors.text} />
        <TouchableOpacity
          style={headerStyles.textContainer}
          onPress={handleNavigation}
        >
          <Text style={headerStyles.placeholderText}>Enter a meeting code</Text>
        </TouchableOpacity>
        <CircleUser
          onPress={() => setVisible(true)}
          name="menu"
          size={RFValue(20)}
          color={Colors.primary}
        />
      </View>

      <InquiryModal onClose={() => setVisible(false)} visible={visible} />
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
