import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: () => {},
    removeBooks: () => {},
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
