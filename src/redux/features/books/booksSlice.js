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
    const request = await axios.post(initialURL, JSON.stringify(object), {
      headers: {
        'Content-type': 'application/json',
      },
    });
    const response = await request.data;
    return response;
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
    [addBooksToAPI.fulfilled]: (state, action) => {
      // books: [...state.booksItem, action.payload],
      // isLoading: false,
      // ...state,
      const storeState = state;
      storeState.isLoading = false;
      const data = action.payload;
      // const books = Object.entries(data).map(([itemId, item]) => {
      //   const book = { itemId, ...item[0] };
      //   return book;
      // });
      console.log(data);
      // return storeState.booksItem;
      // storeState.booksItem = books;
      // return {
      //   ...storeState,
      //   books: [...storeState.booksItem, action.payload],
      // };
      // const newBook = Object.entries(action.payload).map((book) => ({
      //   itemId: book[0],
      //   ...book[1][0],
      //   category: '',
      // }));
      // console.log(newBook);
      // return { ...state, booksItem: newBook };
    },
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
