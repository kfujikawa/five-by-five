export const isAuthenticated = () => {
  return localStorage.token ? true : false;
};

export const logout = () => {
  delete localStorage.token;
};