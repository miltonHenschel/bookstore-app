import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksItem: [],
  isLoading: false,
};

const initialURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jlHjbkMlzkGLXOjWQa2c/books';

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksFromAPI.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooksFromAPI.fulfilled, (state, action) => ({
        ...state,
        booksItem: Object.entries(action.payload).map(([itemId, item]) => {
          const book = { itemId, ...item[0] };
          return book;
        }),
        isLoading: true,
      }))
      .addCase(fetchBooksFromAPI.rejected, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addBooksToAPI.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addBooksToAPI.fulfilled, (state, action) => ({
        ...state,
        booksItem: [...state.booksItem, action.payload],
        isLoading: false,
      }))
      .addCase(addBooksToAPI.rejected, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(removeBooksFromAPI.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(removeBooksFromAPI.fulfilled, (state, action) => ({
        ...state,
        booksItem: state.booksItem.filter(
          (book) => book.itemId !== action.payload,
        ),
        isLoading: false,
      }))
      .addCase(removeBooksFromAPI.rejected, (state) => ({
        ...state,
        isLoading: true,
      }));
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
