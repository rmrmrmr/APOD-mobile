import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apodURL = 'https://api.nasa.gov/planetary/apod?count=10&api_key=sUf2Q8mvZnRhjV6Ch5y5m4d8E3MCWdtSSk0IbBTS';
export const initialState = {
  pictures: [],
  filt: [],
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
  reducers: {
    searchPic: (state, action) => {
      const searchTerm = action.payload;
      const st = JSON.parse(JSON.stringify(state.pictures));
      const filtSearch = st.filter((image) => image.title.match(searchTerm));
      // eslint-disable-next-line no-param-reassign
      state.filt = filtSearch;
    },
  },
  extraReducers: {
    [getList.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getList.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      pictures: action.payload,
      filt: action.payload,
    }),
    [getList.rejected]: (state) => ({
      ...state,
      status: 'rejected',
    }),
  },
});

export default pictures.reducer;
export const { searchPic } = pictures.actions;
