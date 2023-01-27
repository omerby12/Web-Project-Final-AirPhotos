import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UploadPhotoForm from '../components/UploadPhotoForm/UploadPhotoForm';
import { airPhotoCreateActions } from '../features/airPhoto/airPhotoCreateSlice';

const UploadPhotoScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  useEffect(() => {
    return () => dispatch(airPhotoCreateActions.clearAirPhotoCreateData());
  }, [dispatch]);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  return <UploadPhotoForm />;
};

export default UploadPhotoScreen;
