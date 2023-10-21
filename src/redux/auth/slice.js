import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './thunks';

const initialState = {
  token: '',
  // profile: null,
  user: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  // state.profile = payload.user;
  state.user = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginOut: state => {
      state.token = '';
      state.user = null;
      // state.profile = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      // .addCase(logoutThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.fulfilled, handleAuthFulfilled);
  },
});

export const authReducer = authSlice.reducer;

export const { loginOut } = authSlice.actions;
