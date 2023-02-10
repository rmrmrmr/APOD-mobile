import { configureStore } from '@reduxjs/toolkit';
import apodReducer from './apod/getAPOD';

const reducer = {
  apod: apodReducer,
};

const store = configureStore({
  reducer,
});

export default store;
