import { Colors, darkColors, lightColors } from '../utils/constants';
import { screenHeight, screenWidth } from '../utils/constants';

import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  SubHeader: {
    alignItems: 'center',
    paddingTop: 5,
  },
  headerText: {
    color: '#228B22',
    fontSize: 30,
    fontFamily: 'Okra-Medium',
  },
  meetIcon: {
    width: '100%',
    resizeMode: 'contain',
  },
  msgText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontFamily: 'Okra-Regular',
  },
  input: {
    padding: 16,
    paddingHorizontal: 5,
    width: screenWidth * 0.8,
    borderWidth: 1,
    borderRadius: 8,
    margin: 8,
  },
  button: {
    padding: 16,
    width: screenWidth * 0.8,
    borderWidth: 1,
    borderRadius: 8,
    margin: 8,
    alignItems : "center"
  },

  text: {
    fontSize : 15,
    fontFamily: 'Okra-Medium',
    color: 'black',
  },
});

export default authStyles;
