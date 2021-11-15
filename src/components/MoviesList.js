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

export default function MoviesList({ store, navigation }) {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  const naviagteToMovieScreen = () => {
    navigation.navigate('Movie Details');
  }

  const Section = ({children}): Node => {
    return (
      <View style={styles.sectionContainer}>
        <Button title={children} onPress={naviagteToMovieScreen} />
      </View>
    );
  };

  const searchResults = useSelector(state => state.searchResults);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={backgroundStyle}>
        {
          searchResults.map((movie, key) => (
            <Section key={key}>{movie.Title}</Section>
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
