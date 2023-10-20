import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, logIn } from '../../api/user';

export const registrationThunk = createAsyncThunk(
  'users/registration',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await logIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const logoutThunk = createAsyncThunk(
//   'users/logout',
//   async (body, { rejectWithValue }) => {
//     try {
//       const data = await logOut(body);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
