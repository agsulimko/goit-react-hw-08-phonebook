import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registrationThunk } from './thunks';

const initialState = {
  token: '',
  profile: null,
};

const handleUsersFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const usersSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    loginOut: state => {
      state.profile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleUsersFulfilled)
      .addCase(loginThunk.fulfilled, handleUsersFulfilled);
    // .addCase(logoutThunk.fulfilled, handleUsersFulfilled);
  },
});

export const usersReducer = usersSlice.reducer;
export const { loginOut } = usersSlice.actions;
