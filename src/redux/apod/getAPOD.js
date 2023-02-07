import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apodURL = 'https://api.nasa.gov/planetary/apod?count=10&api_key=sUf2Q8mvZnRhjV6Ch5y5m4d8E3MCWdtSSk0IbBTS';
const initialState = {
  pictures: [],
  status: null,
};

export const getList = createAsyncThunk(
  'apod/getList',
  async () => {
    try {
      const response = await (await axios.get(apodURL)).data;
      return response;
    } catch (error) {
      return error;
    }
  },
);

const pictures = createSlice({
  name: 'apod',
  initialState,
  extraReducers: {
    [getList.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getList.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      pictures: action.payload,
    }),
    [getList.rejected]: (state) => ({
      ...state,
      status: 'rejected',
    }),
  },
});

export default pictures.reducer;
