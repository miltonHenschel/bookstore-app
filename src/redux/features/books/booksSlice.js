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
  'books/fetchBooksFromAPI',
  async () => {
    const request = await axios.get(initialURL);
    const response = await request.data;
    // console.log(response);
    return response;
  },
);

// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });

// export const addBooksToAPI = createAsyncThunk(
//   'book/addBooksToAPI',
//   async (data) => {
//     const request = await axios.post(initialURL, data);
//     // const response = await request.data;
//     console.log(request.data);
//     return request.data;
//   },
// );

export const addBooksToAPI = createAsyncThunk(
  'book/addBooksToAPI',
  async (object) => {
    const data = await fetch(initialURL, {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const response = await data.text();
    console.log(response);
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
    [addBooksToAPI.fulfilled]: (state, action) => ({
      ...state,
      books: [...state.booksItem, action.payload],
      isLoading: false,
      // const storeState = state;
      // storeState.isLoading = false;
      // const data = action.payload;
      // const books = Object.entries(data).map(([itemId, item]) => {
      //   const book = { itemId, ...item[0] };
      //   return book;
      // });
      // console.log(books);
      // storeState.booksItem = books;
      // return {
      //   ...storeState,
      //   books: [...storeState.booksItem, action.payload],
      // };
    }),
    [addBooksToAPI.rejected]: (state) => {
      const storeState = state;
      storeState.isLoading = true;
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
