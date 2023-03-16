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

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xOI7HhKVUsDCTkv7qbXd/books';

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.booksItem.push(action.payload);
    },
    removeBooks: (state, action) => {
      const booksId = action.payload;
      state.booksItem = state.booksItem.filter(
        (book) => book.itemId !== booksId,
      );
    },
  },
});

// export const getBooks = (state) => state.books;
export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
