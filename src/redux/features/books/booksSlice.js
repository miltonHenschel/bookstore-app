import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  booksItem: [
    // {
    //   itemId: 'item1',
    //   category: 'Action',
    //   title: 'The Great Gatsby',
    //   author: 'John Smith',
    // },
    // {
    //   itemId: 'item2',
    //   category: 'Fiction',
    //   title: 'Anna Karenina',
    //   author: 'Leo Tolstoy',
    // },
    // {
    //   itemId: 'item3',
    //   category: 'Nonfiction',
    //   title: 'The Selfish Gene',
    //   author: 'Richard Dawkins',
    // },
  ],
  isLoading: false,
  hasSucceeded: false,
};

const initialURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dXhbHW84R2UylfqfKuq7/books';

// dXhbHW84R2UylfqfKuq7
// jlHjbkMlzkGLXOjWQa2c : mine

export const fetchBooksFromAPI = createAsyncThunk(
  'books/fetchBooksFromAPI',
  async () => {
    const request = await axios.get(initialURL);
    const response = await request.data;
    return response;
  },
);

export const addBooksToAPI = createAsyncThunk(
  'book/postBooks',
  async (book) => {
    const request = await axios(initialURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemId: uuidv4(),
        title: book.title,
        author: book.author,
        category: '',
      }),
    });
    const response = await request.json();
    return response;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBooks: (state, action) => {
    //   state.booksItem.push(action.payload);
    // },
    // removeBooks: (state, action) => {
    //   const booksId = action.payload;
    //   state.booksItem = state.booksItem.filter(
    //     (book) => book.itemId !== booksId,
    //   );
    // },
  },
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
    [addBooksToAPI.fulfilled]: (state) => {
      const storeState = state;
      storeState.isLoading = false;
    },
    [addBooksToAPI.rejected]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
