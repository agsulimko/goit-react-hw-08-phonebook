import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, refreshThunk, registrationThunk } from './thunks';
import { deleteContacts } from 'redux/operations';

const initialState = {
  token: '',
  user: null,
  // isRefreshing: false,
  // isLoggedIn: false,
  // profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  // state.profile = payload.user;
  state.user = payload.user;
  // state.isLoggedI = true;
};
const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload);
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
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(deleteContacts.fulfilled, handleFulfilledDelete);
  },
});

export const authReducer = authSlice.reducer;

export const { loginOut } = authSlice.actions;
