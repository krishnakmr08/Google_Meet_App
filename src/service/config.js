import { Platform } from 'react-native';

export const BASE_URL =
  Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000';
export const SOCKET_URL =
  Platform.OS === 'ios' ? 'ws://localhost:4000' : 'ws://10.0.2.2:4000';

//  NETWORK IP ADDRESS
// export const BASE_URL = 'http://192.168.0.103:4000';
// export const SOCKET_URL = 'ws://192.168.0.103:4000';
