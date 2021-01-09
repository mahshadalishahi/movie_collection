/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export async function isNetworkConnected() {
  return NetInfo.fetch().then((res) => {
    const {isConnected} = res;
    let status = isConnected;
    if (Platform.OS === 'ios') {
      status = NetInfo.fetch('https://www.google.com');
    }
    return status;
  });
}
