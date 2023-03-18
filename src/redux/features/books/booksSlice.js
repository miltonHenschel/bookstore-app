import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksItem: [],
  isLoading: false,
};

const initialURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dXhbHW84R2UylfqfKuq7/books';

export const fetchBooksFromAPI = createAsyncThunk(
  'books/fetchBooksFromAPI',
  async () => {
    const request = await axios.get(initialURL);
    const response = await request.data;
    return response;
  },
);

export const addBooksToAPI = createAsyncThunk(
  'book/addBooksToAPI',
  async (object) => {
    await axios.post(initialURL, JSON.stringify(object), {
      headers: {
        'Content-type': 'application/json',
      },
    });
    return object;
  },
);

export const removeBooksFromAPI = createAsyncThunk(
  'books/removeBooksFromAPI',
  async (itemId) => {
    await axios.delete(`${initialURL}/${itemId}`);
    return itemId;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooksFromAPI.pending]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },
    [fetchBooksFromAPI.fulfilled]: (state, action) => {
      const storeState = state;
      storeState.isLoading = false;
      const data = action.payload;
      const books = Object.entries(data).map(([itemId, item]) => {
        const book = { itemId, ...item[0] };
        return book;
      });
      storeState.booksItem = books;
    },
    [fetchBooksFromAPI.rejected]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },

    [addBooksToAPI.pending]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },
    [addBooksToAPI.fulfilled]: (state, action) => ({
      ...state,
      booksItem: [...state.booksItem, action.payload],
      isLoading: false,
    }),
    [addBooksToAPI.rejected]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },

    [removeBooksFromAPI.pending]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },
    [removeBooksFromAPI.fulfilled]: (state, action) => {
      const storeState = state;
      storeState.isLoading = false;
      const booksId = action.payload;
      storeState.booksItem = storeState.booksItem.filter(
        (book) => book.itemId !== booksId,
      );
    },
    [removeBooksFromAPI.rejected]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
