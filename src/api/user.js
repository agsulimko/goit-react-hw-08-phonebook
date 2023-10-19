// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

// export const signUp = async body => {
//   const { data } = await axios.post('/users/signup', body);
//   console.log(data);

//   return data;
// };
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://practices-api.vercel.app',
});

export const signUp = async body => {
  const { data } = await axios.post('/auth/signup', body);
  console.log(data);

  return data;
};

// export const setToken = token => {
//   instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// export const deleteToken = () => {
//   delete instance.defaults.headers.common['Authorization'];
// };

// export const signUp = async body => {
//   const { data } = await instance.post('auth/signup', body);
//   setToken(data.token);
//   return data;
// };

// export const signIn = async body => {
//   const { data } = await instance.post('auth/login', body);
//   setToken(data.token);
//   return data;
// };

// export const refresh = async () => {
//   const token = JSON.parse(localStorage.getItem('persist:auth'));
//   setToken(JSON.parse(token?.token));
//   const { data } = await instance('auth/refresh');
//   setToken(data.token);
//   return data;
// };
