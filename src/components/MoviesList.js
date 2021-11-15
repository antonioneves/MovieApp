import React from 'react';
import type {Node} from 'react';
import {useSelector} from 'react-redux';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const backgroundStyle = {
  backgroundColor: Colors.darker,
};

const navigateToMovieScreen = (navigation, id) => {
  return () => navigation.navigate('Movie Details', {movieId: id});
}

export default function MoviesList({ store, navigation }) {
  const searchResults = useSelector(state => state.searchResults);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={backgroundStyle}>
        {
          searchResults.map((movie, key) => (
            <Button key={key} title={movie.Title} onPress={navigateToMovieScreen(navigation, movie.imdbID)}/>
          ))
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
