import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialAirPhotosState = {
  airPhotos: [],
  loading: false,
  error: null,
  pages: null,
  page: null,
};

export const getAirPhotos = createAsyncThunk(
  'airPhoto/getAirPhotos',
  async ({ keyword = '', pageNumber = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/airphotos?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const airPhotosSlice = createSlice({
  name: 'airPhotos',
  initialState: initialAirPhotosState,
  reducers: {
    clearAirPhotosData(state) {
      state.loading = false;
      state.airPhotos = [];
      state.error = null;
      state.pages = null;
      state.page = null;
    },
  },
  extraReducers: {
    // getAirPhotos
    [getAirPhotos.pending]: (state) => {
      state.loading = true;
      state.airPhotos = [];
      state.error = null;
      state.pages = null;
      state.page = null;
    },
    [getAirPhotos.fulfilled]: (state, { payload }) => {
      state.airPhotos = payload.airPhotos;
      state.pages = payload.pages;
      state.page = payload.page;
      state.loading = false;
      state.error = null;
    },
    [getAirPhotos.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.airPhotos = [];
      state.pages = null;
      state.page = null;
    },
  },
});

export const airPhotosActions = airPhotosSlice.actions;
export default airPhotosSlice.reducer;
