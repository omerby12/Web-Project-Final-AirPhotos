import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import userDetailsReducer from '../features/user/userDetailsSlice';
import userUpdateProfileReducer from '../features/user/userUpdateProfileSlice';
import airPhotoCreateReducer from '../features/airPhoto/airPhotoCreateSlice';
import airPhotosReducer from '../features/airPhoto/airPhotosSlice';
import airPhotoDetailsReducer from '../features/airPhoto/airPhotoDetailsSlice';
import airPhotoListMyReducer from '../features/airPhoto/airPhotoListMySlice';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  user: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    airPhotoCreate: airPhotoCreateReducer,
    airPhotos: airPhotosReducer,
    airPhotoDetails: airPhotoDetailsReducer,
    airPhotoListMy: airPhotoListMyReducer,
  },
  preloadedState: initialState,
});
