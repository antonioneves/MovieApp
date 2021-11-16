import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text, StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native';
import { Chip } from 'react-native-elements';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

import rootReducer from '../reducers';
import {setMovieDetails} from '../actions';

import defaultMovie from '../assets/images/default-movie.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darker,
  },
  image: {
    width: 180,
    height: 300,
    margin: 20,
  },
  textGroup: {
    marginTop: 14,
    color: Colors.white,
    textAlign: 'justify',
  },
  textStyleTitle: { 
    fontWeight: 'bold',
  },
  textViewStyle: {
    backgroundColor: Colors.darker,
    marginLeft: 20,
    marginRight: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
});

function Details() {
  const movieDetails = useSelector(state => state.movieDetails);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={
          movieDetails.Poster !== 'N/A'
            ? {uri: movieDetails.Poster}
            : defaultMovie
        }
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.textViewStyle}>
        <Text style={styles.textGroup}>
          <Text style={styles.titleText}>{movieDetails.Title}</Text>
        </Text>
        {movieDetails.Ratings?.map((rate, key) => (
          <Text key={key} style={styles.textGroup}>
            <Chip
              title={rate.Source + ": " + rate.Value}
            />
          </Text>
        ))}
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Genre: </Text>
          <Text>{movieDetails.Genre}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Type: </Text>
          <Text>{movieDetails.Type}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Runtime: </Text>
          <Text>{movieDetails.Runtime}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Released: </Text>
          <Text>{movieDetails.Released}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Director: </Text>
          <Text>{movieDetails.Director}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Plot: </Text>
          <Text>{movieDetails.Plot}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Actors: </Text>
          <Text>{movieDetails.Actors}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Writer: </Text>
          <Text>{movieDetails.Writer}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Language: </Text>
          <Text>{movieDetails.Language}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Country: </Text>
          <Text>{movieDetails.Country}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>Awards: </Text>
          <Text>{movieDetails.Awards}</Text>
        </Text>
        <Text style={styles.textGroup}>
          <Text style={styles.textStyleTitle}>IMDb Votes: </Text>
          <Text>{movieDetails.imdbVotes}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function getMovieDetailsFromApi(id, store) {
  return fetch('https://www.omdbapi.com?apikey=ea8d3d70&i=' + id)
    .then(response => response.json())
    .then(json => {
      store.dispatch(setMovieDetails(json));
    })
    .catch(error => {
      console.error(error);
    });
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
