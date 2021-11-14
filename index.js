/**
 * @format
 */

import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Search from './src/components/Search';
import rootReducer from './src/reducers';

AppRegistry.registerComponent(
  appName,
  () =>
    (Node = () => {
      const store = createStore(rootReducer);

      return (
        <Provider store={store}>
          <SafeAreaView>
            <Search store={store} />
            
          </SafeAreaView>
        </Provider>
      );
    }),
);
