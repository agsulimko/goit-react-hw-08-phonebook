import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, refreshThunk, registrationThunk } from './thunks';

const initialState = {
  token: '',
  profile: null,
};

const handleUsersFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logOut: state => {
      state.profile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(registrationThunk.fulfilled, handleUsersFulfilled);
    //   .addCase(loginThunk.fulfilled, handleUsersFulfilled)
    //   .addCase(refreshThunk.fulfilled, handleUsersFulfilled);
  },
});

export const usersReducer = usersSlice.reducer;
export const { logOut } = usersSlice.actions;
