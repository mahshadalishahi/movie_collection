import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {makeStore} from '../src/redux/store';
import {Root} from 'native-base';

export const store = makeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Root>
    </Provider>
  );
};

export default App;
