/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksItem: [
    {
      itemId: 'item1',
      category: 'Action',
      title: 'The Great Gatsby',
      author: 'John Smith',
    },
    {
      itemId: 'item2',
      category: 'Fiction',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
    },
    {
      itemId: 'item3',
      category: 'Nonfiction',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.booksItem.push(action.payload);
    },
    removeBooks: (state, action) => {
      const booksId = action.payload;
      // console.log(state.booksItem, booksId);
      state.booksItem = state.booksItem.filter(
        (book) => book.itemId !== booksId,
      );
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
