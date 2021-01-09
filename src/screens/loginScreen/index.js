import {Form, View} from 'native-base';
import React, {useState} from 'react';
import MainButton from '../../components/MainButton';
import MainInput from '../../components/MainInput';
import MainLayouts from '../../layouts/MainLayout';
import {StyleSheet} from 'react-native';
import {getToken} from '../../services/auth';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../redux/auth/action';
import storageHelper from '../../helpers/storageHelper';

function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function loginToApp() {
    setLoading(true);
    const {token} = await getToken({username, password});
    setLoading(false);
    if (token) {
      dispatch(setAuth(token));
      await storageHelper.setAsyncStorage(storageHelper.KEY_TOKEN, token);
      navigation.navigate('app');
    }
  }

  return (
    <MainLayouts title="Login">
      <Form style={styles.login_form}>
        <View>
          <MainInput
            placeholder="username"
            onChangeText={(text) => setUsername(text)}
          />
          <MainInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <MainButton
          title="login"
          onPress={loginToApp}
          loading={loading}
          disabled={!username || !password}
        />
      </Form>
    </MainLayouts>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  login_form: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
});
