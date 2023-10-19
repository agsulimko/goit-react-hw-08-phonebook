import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from '../../api/user';

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

// export const refreshThunk = createAsyncThunk(
//   'users/refresh',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await refresh();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const loginThunk = createAsyncThunk(
//   'users/login',
//   async (body, { rejectWithValue }) => {
//     try {
//       const data = await signIn(body);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
