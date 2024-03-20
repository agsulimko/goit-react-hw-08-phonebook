import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  refreshThunk,
  registrationThunk,
  logoutThunk,
} from './auchOperations';

const initialState = {
  token: '',
  user: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;

  state.user = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {
  //   loginOut: state => {
  //     state.token = '';
  //     state.error = null;
  //     state.isLoading = false;
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.user = { name: null, phone: null };
        state.token = '';
        state.error = null;
        state.isLoading = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        // state.user = payload;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { logOut } = authSlice.actions;
