const setSearchResults = (search) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    payload: search
  }
}

const setMovieDetails = (details) => {
  return {
    type: 'SET_MOVIE_DETAILS',
    payload: details
  }
}

export { setSearchResults, setMovieDetails };