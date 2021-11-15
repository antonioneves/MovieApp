import React from 'react';
import {Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, SafeAreaView} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

import rootReducer from '../reducers';
import {setMovieDetails} from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const backgroundStyle = {
  color: Colors.white,
};

var prevMovieId = '';

getMovieDetailsFromApi = (id, store) => {
  return fetch('https://www.omdbapi.com?apikey=ea8d3d70&i=' + id)
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(setMovieDetails(json));
    })
    .catch((error) => {
      console.error(error);
    });
};

function Details() {
  const movieDetails = useSelector(state => state.movieDetails);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={backgroundStyle}>This is a movie: {movieDetails.Plot}</Text>
    </SafeAreaView>
  );
}

export default function MovieDetailsScreen({ navigation }) {
  const store = createStore(rootReducer);
  const { movieId } = navigation.state.params;
  getMovieDetailsFromApi(movieId, store);
  
  return (
    <Provider store={store}>
      <Details />
    </Provider>
  );
}
