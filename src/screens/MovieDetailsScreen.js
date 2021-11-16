import React from 'react';
import {Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

import rootReducer from '../reducers';
import {setMovieDetails} from '../actions';

import defaultMovie from '../assets/images/default-movie.png';

const textStyle = {
  color: Colors.white,
};

const backgroundStyle = {
  backgroundColor: Colors.darker,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 180,
    height: 300,
  },
});

getMovieDetailsFromApi = (id, store) => {
  return fetch('https://www.omdbapi.com?apikey=ea8d3d70&i=' + id)
    .then(response => response.json())
    .then(json => {
      store.dispatch(setMovieDetails(json));
    })
    .catch(error => {
      console.error(error);
    });
};

function Details() {
  const movieDetails = useSelector(state => state.movieDetails);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Image
          style={styles.logo}
          source={
            movieDetails.Poster !== 'N/A'
              ? {uri: movieDetails.Poster}
              : defaultMovie
          }
        />
        <Text style={textStyle}>Title: {movieDetails.Title}</Text>
        <Text style={textStyle}>Genre: {movieDetails.Genre}</Text>
        <Text style={textStyle}>Director: {movieDetails.Director}</Text>
        <Text style={textStyle}>Plot: {movieDetails.Plot}</Text>
        <Text style={textStyle}>Actors: {movieDetails.Actors}</Text>
        {movieDetails.Ratings?.map((rate, key) => (
          <Text style={textStyle} key={key}>
            {rate.Source}: {rate.Value}
          </Text>
        ))}
        <Text style={textStyle}>IMDb Votes: {movieDetails.imdbVotes}</Text>

        <Text style={textStyle}>Type: {movieDetails.Type}</Text>
        <Text style={textStyle}>Year: {movieDetails.Year}</Text>
        <Text style={textStyle}>Released: {movieDetails.Released}</Text>
        <Text style={textStyle}>Runtime: {movieDetails.Runtime}</Text>
        <Text style={textStyle}>Writer: {movieDetails.Writer}</Text>
        <Text style={textStyle}>Language: {movieDetails.Language}</Text>
        <Text style={textStyle}>Country: {movieDetails.Country}</Text>
        <Text style={textStyle}>Awards: {movieDetails.Awards}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function MovieDetailsScreen({navigation}) {
  const store = createStore(rootReducer);
  const {movieId} = navigation.state.params;
  getMovieDetailsFromApi(movieId, store);

  return (
    <Provider store={store}>
      <Details />
    </Provider>
  );
}
