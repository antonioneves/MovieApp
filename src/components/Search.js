import React from 'react';
import {SearchBar} from 'react-native-elements';
import {connect, useDispatch} from 'react-redux';

import setSearchTerm from '../actions';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
    this.props.store.dispatch(setSearchTerm(search));
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
