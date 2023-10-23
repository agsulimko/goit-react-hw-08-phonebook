// import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectAuth = state => state.auth.token;
export const selectUser = state => state.auth.profile;
//  export const selectProfile = state => state.auth.user;
