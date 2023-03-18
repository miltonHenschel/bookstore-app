/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/booksSlice';
import categoriesReducer from './features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
