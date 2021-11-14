import React from 'react';
import {SearchBar} from 'react-native-elements';

import setSearchResults from '../actions';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  movies = [];

  getMoviesFromApi = search => {
    return fetch('https://www.omdbapi.com?apikey=ea8d3d70&s=' + search)
      .then((response) => response.json())
      .then((json) => {
        if (json.Response === "True") movies = json.Search;
        else movies = [];
        this.props.store.dispatch(setSearchResults(movies));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  updateSearch = search => {
    this.setState({search});
    this.getMoviesFromApi(search);
  };

  render() {
    const {search} = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
