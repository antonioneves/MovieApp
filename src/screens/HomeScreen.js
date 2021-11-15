import React from 'react';

import {StyleSheet, SafeAreaView} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Search from '../components/Search';
import MoviesList from '../components/MoviesList';
import rootReducer from '../reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function HomeScreen ({ navigation }) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Search store={store} navigation={navigation}/>
        <MoviesList store={store} navigation={navigation}/>
      </SafeAreaView>
    </Provider>
  );
};