import React from 'react';
import type {Node} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ListItem, Avatar} from 'react-native-elements';

import defaultMovie from '../assets/images/default-movie.png';

const styles = StyleSheet.create({
  backgroundStyle: { 
    backgroundColor: Colors.darker,
  },
  titleStyle: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  subtitleStyle: {
    color: Colors.white,
  },
  avatarStyle: {
    width: 50, 
    height: 80.
  },
});

const navigateToMovieScreen = (navigation, id) => {
  return () => navigation.navigate('Movie Details', {movieId: id});
};

export default function MoviesList({store, navigation}) {
  const searchResults = useSelector(state => state.searchResults);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.backgroundStyle}>
      <View style={styles.backgroundStyle}>
        {searchResults.map((movie, key) => (
          <ListItem
            key={key}
            containerStyle={styles.backgroundStyle}
            onPress={navigateToMovieScreen(navigation, movie.imdbID)}
            bottomDivider>
            <Avatar
              size="large"
              avatarStyle={styles.avatarStyle}
              source={
                movie.Poster !== 'N/A' ? {uri: movie.Poster} : defaultMovie
              }
            />
            <ListItem.Content>
              <ListItem.Title style={styles.titleStyle}>{movie.Title}</ListItem.Title>
              <ListItem.Subtitle style={styles.subtitleStyle}>
                {movie.Year}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
}
