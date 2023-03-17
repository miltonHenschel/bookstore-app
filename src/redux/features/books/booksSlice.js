/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  'books/getBooksFromAPI',
  async () => {
    const response = await axios.get(initialURL);
    const data = await response.json();
    console.log(await data);
    return data;
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
      state.isLoading = true;
    },

    [fetchBooksFromAPI.fulfilled]: (state, action) => {
      // state.isLoading = false;
      // const data = action.payload;
      // const books = Object.entries(data).map(([id, item]) => {
      //   const singleBook = { id, ...item[0] };
      //   return singleBook;
      // });
      // state.booksItem = books;
      const newBook = Object.entries(action.payload).map((book) => ({
        itemId: book[0],
        ...book,
      }));
      return { ...state, booksItem: newBook };
    },

    // {
    //   "282":[{"author":"ada","category":"Drama","title":"da"}],"455":[{"author":"dad","category":"Drama","title":"ad"}],"c66d667f-5bdc-42e7-8b5d-51378f6a93a7":[{"author":"J.K. Rowling","title":"Harry Potter  - J.K. Rowling","category":"Fantasy"}],"ec5da28d-6463-427d-b75f-d3d79ee9ef7d":[{"author":"yo","title":"harry poter - yo","category":"Action"}],
    // }

    [fetchBooksFromAPI.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
