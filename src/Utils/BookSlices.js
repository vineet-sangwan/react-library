import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    // Add other reducers if necessary
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
