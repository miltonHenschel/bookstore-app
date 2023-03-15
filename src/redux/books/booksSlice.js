import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksItems: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      const bookId = action.payload;
      state.booksItems = state.booksItems.push(bookId);
    },
    removeBooks: (state, action) => {
      const bookId = action.payload;
      state.booksItems = state.booksItems.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
