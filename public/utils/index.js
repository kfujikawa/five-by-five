export const isAuthenticated = () => {
  return localStorage.token ? true : false;
};

export const logout = () => {
  delete localStorage.token;
};


export const notAuthed = auth => {
  return (nextState, replace) => {
    let { location: { query } } = nextState
    if (localStorage.token) replace({ pathname: query && query.return_to || '/' })
  }
}

export const requireAuth = auth => {
  return (nextState, replace) => {
    if (!auth.loggedIn) replace({ pathname: '/login', query: { return_to: nextState.location.pathname } })
  }
}