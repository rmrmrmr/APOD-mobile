import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apodURL = 'https://api.nasa.gov/planetary/apod?start_date=2021-01-15&end_date=2021-01-24&api_key=sUf2Q8mvZnRhjV6Ch5y5m4d8E3MCWdtSSk0IbBTS';
export const initialState = {
  pictures: [],
  filt: [{
    title: 'Loading...',
    hdurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEi0lEQVR4nO2aXW8WVRDHH0gUjC0BAuUGUQnxJSDfAVtqTGg0vpCi3wBaabwDrymFckMwIPgJCOGGV71WYxWMd1KqF1bBpIJygbw+4M9MOicZp+fZPbvPPlsx/JNNtp1zzux/Z+acmdmn0XiM/ymAZcCbwDhwFpgE/gTu6SX3l1QmY94Aljb+CwAWAe8DnwMPKA6Zcx54T9ZqzAOBp4APgatUhyvACLC4LhKvAz8VfMgn1PXWA28Do8AE8DAy9kfgtU4SWAwcLvOqM9ZcDexSa3h8XLm7AauAi2VIZBFxsbYd+MNN/RboqYrEc2ru0iigawVw3E2fkmeowhJtkVDcB34HvgGOAYNAd4beHUDTkelpJyZKu1MCbgGfAuta6B8Abjs3Kx4zZQO7pLXGYg/JLBlrmUNlttiymNQH6wVeAp7WS+77gH3A5ci8r8SVI88y5Mb1Fznsip4TggvAqwVeVm/EdaeBDZGxJ1y85LuYnthFXUOCc0EqCaNrATDs3GfaWwZYqblawM6U/bxI2iGLbypKoIV1bph1v/Rv3bnYr5lW0QSwiCXaJuHINM36ozkveVvWYpLFpmJHVSSM/g/M+pL6r3Xy3UZ+rtUiywqk4hfKxEQCkYXAd0bPUSdfYxJNsd6S2CJSFKUieXcqQabP6PkL6HJyyQ4CBmILHEgkMdkpEgG6xQZsdTI5owL2W1kYcCaRyFijwwD2G32fONk7RnY67y1koa8GIpuNvgkneyXTO4DriUReqIHIi0bfTCTVD7gWmyzbXQq6aiDSZfTdjZwnUVmMyJMZsu4aiCxph4h1reVOdu1Rcq3LZsD6jL27jmDvN/q+zgj2S3nb71tOJuVpwL4aiIwnbr+n8ib7hE1q7Pk6EN/NOBDnvlTtxbbau7u1xg7orcmtbkp16eSS5wVsiS2w1CSNkpitdnJpFARc7GDS+H1i0ng/mjTqwM/MIrucbJ1ODhjuAJERs/5d4Hkn/8jIz2QtJF3xgCuRKs36Z7NKF9O0pGnW3xNpT/1m5INZiy1yfdjtEbl0OwJuVEFGSdhS94vIoWyLrl+8PM+8ckiuiHQfp51lRMnCkjEx4izxs+8qyt+u+ZDv1mpC2yY9HhmzwZFBK7u+glawgS2Y9oexjj3p+mZpHUf5PpFXn6tlpNvhMaX1xGZtynXp9bJureMt+sniTnP6u9L6MWP+LpxZ6PcJ6z5zykqNmdECmXMMMndPzOeZPdtsH+FgIRLmIaVxHHA7WiPPjl0re77W2Km4qXP+tcU6EnfM+IncAG8FDbIpZ5mhjPHiQlslP1LFM+ar7oz+74ikHf7EjrjTA6NXEtqVpUi4Dz2+DD5R2ZekuXF30ukSEs9WpaDHuRm6HQ5V8Z1Pd0rZwu1ZEtypPUu0iJlDEV+/qh3AZ0qsuUbTDntih93pYOmYSFTe36Lj8lALsL1aM0gBtFweRi+536iyMbVw7PP0ZB3Fm7XOTu2KVwVJO4bn6xcQQmib/r7EphmpaGplOthRNyrR+RjQU/20/oDmutl+5f4HKU/189uWOjoyj9GYJ/wDD3MJxG549v0AAAAASUVORK5CYII=  ',
  }],
  details: [],
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
      const searchTerm = action.payload.toLowerCase();
      const st = JSON.parse(JSON.stringify(state.pictures));
      const filtSearch = st.filter((image) => image.title.toLowerCase().match(searchTerm));
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
