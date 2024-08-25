import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BookSlices';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
