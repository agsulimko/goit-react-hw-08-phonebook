import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common.Authorization;
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

export const refresh = async body => {
  const { data } = await instance.get('/users/current', body);
  setToken(data.token);
  return data;
};
export const logOut = async body => {
  const { data } = await instance.post('/users/logout', body);
  deleteToken();
  // setToken(data.token);
  console.log(data);
  return data;
};
export const getContacts = async body => {
  const { data } = await instance('/contacts', body);
  setToken(data.token);
  console.log(data);
  return data;
};

export const postContacts = async body => {
  const { data } = await instance.post('/contacts', body);
  setToken(data.token);
  console.log(data);
  return data;
};

// export const deleteContact = async contactId => {
//   const { data } = await instance.delete(`/contacts/${contactId}`);

//   setToken(data.token);
//   console.log(data);
//   return data;
// };

// export const logOut = async body => {
//   const { data } = await instance.post('/users/logout', body);
//   // setToken(data.token);
//   console.log(data);
//   return data;
// };
