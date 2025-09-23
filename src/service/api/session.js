import { Alert } from 'react-native';
import { BASE_URL } from '../config';
import axios from 'axios';

export const createSession = async () => {
  try {
    const apiRes = await axios.post(`${BASE_URL}/create-session`);
    return apiRes?.data?.sessionId;
  } catch (error) {
    console.error('Error creating session:', error);
    Alert.alert('There was an error');
    return null;
  }
};
export const checkSession = async (sessionId) => {
  try {
    const apiRes = await axios.get(`${BASE_URL}/is-alive?sessionId=${sessionId}`);
    return apiRes?.data?.isAlive;
  } catch (error) {
    console.log('Error checking session', error);
    return false;
  }
};
