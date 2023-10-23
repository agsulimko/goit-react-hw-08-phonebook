import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContacts, setToken } from 'api/auth';
import axios from 'axios';
// import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // const data = await axios('/contacts');
      const data = await getContacts();
      // setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  '/contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      // const data = await postContacts({
      const data = await postContacts({
        name: name,
        number: number,
      });
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await deleteContact({
//         contactId,
//       });
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
