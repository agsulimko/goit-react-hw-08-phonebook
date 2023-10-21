import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from 'api/auth';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get('/contacts');
      setToken(data.token);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  '/contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const data = await axios.post('/contacts', {
        name: name,
        number: number,
      });
      setToken(data.token);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const data = await axios.delete(`/contacts/${contactId}`);
      setToken(data.token);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
