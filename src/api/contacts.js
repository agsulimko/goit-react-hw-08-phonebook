import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const getProductsBySearch = async (query) => {
// 	const { data } = await axios(`products/search?q=${query}`)
// 	return data
// }

// export const getSingleProduct = async (id) => {
// 	const { data } = await axios(`products/${id}`)
// 	return data
// }

// export const removeContact = async id => {
//   const { data } = await axios.delete(`/contacts/${contactId}`);
//   return data;
// };

// export const getProducts = async () => {
// 	const { data } = await axios('products')
// 	return data
// }
