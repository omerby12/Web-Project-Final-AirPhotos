import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialAirPhotoDetailsState = {
  airPhoto: {
    location: null,
    photo: null,
    aircraft: null,
    date: null,
    caption: null,
  },
  loading: false,
  error: null,
};

export const getAirPhotoDetails = createAsyncThunk(
  'airPhoto/getAirPhotoDetails',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/airphotos/${id}`);
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

const airPhotoDetailsSlice = createSlice({
  name: 'airPhotoDetails',
  initialState: initialAirPhotoDetailsState,
  reducers: {
    clearAirPhotoDetailsData(state) {
      state.loading = false;
      state.airPhoto = {
        location: null,
        photo: null,
        aircraft: null,
        date: null,
        caption: null,
      };
      state.error = null;
    },
  },
  extraReducers: {
    // getAirPhotos
    [getAirPhotoDetails.pending]: (state) => {
      state.loading = true;
    },
    [getAirPhotoDetails.fulfilled]: (state, { payload }) => {
      state.airPhoto = payload;
      state.loading = false;
      state.error = null;
    },
    [getAirPhotoDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.airPhoto = {
        location: null,
        photo: null,
        aircraft: null,
        date: null,
        caption: null,
      };
    },
  },
});

export const airPhotoDetailsActions = airPhotoDetailsSlice.actions;
export default airPhotoDetailsSlice.reducer;
