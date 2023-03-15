import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.push(action.payload);
    },
    removeBooks: (state, action) => {
      const booksId = action.payload;
      state.filter((book) => book.id !== booksId);
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
