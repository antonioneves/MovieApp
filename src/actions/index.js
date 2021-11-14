const setSearchResults = (search) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    payload: search
  }
}

export default setSearchResults;