import React from 'react';
import {StyleSheet, AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';

import Search from './src/components/Search';
import MoviesList from './src/components/MoviesList';
import rootReducer from './src/reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent(
  appName,
  () =>
    (Node = () => {
      const store = createStore(rootReducer);

      return (
        <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <Search store={store} />
            <MoviesList store={store} />
          </SafeAreaView>
        </Provider>
      );
    }),
);
