import AsyncStorage from '@react-native-community/async-storage';

const storageHelper = {
  KEY_TOKEN: '@MyToken:UserToken',
  getAsyncStorage: async (key) => {
    return await AsyncStorage.getItem(key);
  },
  setAsyncStorage: async (key, value) => {
    await AsyncStorage.setItem(key, value);
  },
};
export default storageHelper;
