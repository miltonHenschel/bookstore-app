import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    category: 'Action',
    title: 'The Great Gatsby',
    author: 'John Smith',
  },
  {
    item_id: 'item2',
    category: 'Fiction',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
  },
  {
    item_id: 'item3',
    category: 'Nonfiction',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.push(action.payload);
    },
    removeBooks: (state, action) => {
      const booksId = action.payload;
      state.filter((book) => book.item_id !== booksId);
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
