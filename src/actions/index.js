const setSearchTerm = (search) => {
  return {
    type: 'SET_SEARCH_TERM',
    payload: search
  }
}

export default setSearchTerm;