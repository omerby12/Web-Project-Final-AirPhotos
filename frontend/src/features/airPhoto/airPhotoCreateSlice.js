import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialAirPhotoCreateState = {
  airPhoto: {},
  success: false,
  loading: false,
  error: null,
};

export const airPhotoCreate = createAsyncThunk(
  'airPhoto/airPhotoCreate',
  async ({ airPhoto }, { getState, rejectWithValue }) => {
    try {
      const userInfo = getState().user.userInfo;
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(`/api/airphotos`, airPhoto, config);
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

const airPhotoCreateSlice = createSlice({
  name: 'airPhotoCreate',
  initialState: initialAirPhotoCreateState,
  reducers: {
    clearAirPhotoCreateData(state) {
      state.loading = false;
      state.airPhoto = null;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: {
    // airPhotoCreate
    [airPhotoCreate.pending]: (state) => {
      state.loading = true;
      state.product = null;
      state.success = false;
      state.error = null;
    },
    [airPhotoCreate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.airPhoto = payload;
    },
    [airPhotoCreate.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.airPhoto = null;
    },
  },
});

export const airPhotoCreateActions = airPhotoCreateSlice.actions;
export default airPhotoCreateSlice.reducer;
