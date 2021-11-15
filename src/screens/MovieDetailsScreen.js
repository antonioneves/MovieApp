import React from 'react';
import {Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const backgroundStyle = {
  color: Colors.white,
};

export default function MovieDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={backgroundStyle}>This is a movie detail</Text>
    </SafeAreaView>
  );
}
