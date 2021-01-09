/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, StatusBar, Image, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import logo from '../../assets/images/logo.png';
import storageHelper from '../../helpers/storageHelper';
import {setAuth} from '../../redux/auth/action';

function SplashScreen({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const isLoggedIn = await storageHelper.getAsyncStorage(
        storageHelper.KEY_TOKEN,
      );
      if (isLoggedIn) {
        navigation.navigate('app');
        dispatch(setAuth(isLoggedIn));
      } else {
        navigation.navigate('auth');
      }
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.loadingText}>loading...</Text>
      </View>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
});
