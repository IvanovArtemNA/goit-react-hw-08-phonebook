import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'phonebook',
  initialState: '',
  reducers: {
    setValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
