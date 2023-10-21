import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};
export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token);
  console.log(data);

  return data;
};

export const logIn = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  console.log(data);
  return data;
};

export const refresh = async () => {
  const token = JSON.parse(localStorage.getItem('persist:auth'));

  setToken(JSON.parse(token?.token));
  const { data } = await instance('/users/current');
  setToken(data.token);
  return data;
};

// export const logIn = async body => {
//   const { data } = await instance('/contacts', body);
//   setToken(data.token);
//   console.log(data);
//   return data;
// };

// export const logOut = async body => {
//   const { data } = await instance.post('/users/logout', body);
//   setToken(data.token);
//   console.log(data);
//   return data;
// };