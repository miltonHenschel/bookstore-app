/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  isLoading: false,
};

const initialURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xOI7HhKVUsDCTkv7qbXd/books';

const fetchBooksFromAPI = createAsyncThunk(
  'books/getBooksFromAPI',
  async (thunkAPI) => {
    try {
      const response = await axios.get(initialURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong.');
    }
  },
);

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
  extraReducers: {
    [fetchBooksFromAPI.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooksFromAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksItem = action.payload;
    },
    [fetchBooksFromAPI.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const getBooks = (state) => state.books;
export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
