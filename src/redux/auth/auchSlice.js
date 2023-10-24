import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, refreshThunk, registrationThunk } from './auchOperations';

const initialState = {
  token: '',
  user: null,

  // profile: null,
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
      // state.user = null;
      // state.profile = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      // .addCase(logoutThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { loginOut } = authSlice.actions;
