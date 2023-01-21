import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contactsSlice.js';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
