import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialAirPhotoListMyState = {
  airPhotos: [],
  loading: false,
  error: null,
};

export const getMyAirPhotoList = createAsyncThunk(
  'airPhoto/getMyAirPhotoList',
  async (_, { getState, rejectWithValue }) => {
    try {
      const userInfo = getState().user.userInfo;
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`/api/airphotos/myairphotos`, config);
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

const airPhotoListMySlice = createSlice({
  name: 'airPhotoListMy',
  initialState: initialAirPhotoListMyState,
  reducers: {
    clearAirPhotoListMyData(state) {
      state.loading = false;
      state.airPhotos = [];
      state.error = null;
    },
  },
  extraReducers: {
    // getMyAirPhotoList
    [getMyAirPhotoList.pending]: (state) => {
      state.loading = true;
      state.airPhotos = [];
      state.error = null;
    },
    [getMyAirPhotoList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.airPhotos = payload;
      state.error = null;
    },
    [getMyAirPhotoList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.airPhotos = [];
    },
  },
});

export const airPhotoListMyActions = airPhotoListMySlice.actions;
export default airPhotoListMySlice.reducer;
