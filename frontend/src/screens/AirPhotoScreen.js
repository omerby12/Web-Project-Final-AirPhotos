import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AirPhoto from '../components/AirPhoto/AirPhoto';
import Message from '../components/UI/Message';
import Loader from '../components/UI/Loader';

import {
  getAirPhotoDetails,
  airPhotoDetailsActions,
} from '../features/airPhoto/airPhotoDetailsSlice';

const AirPhotoScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const airPhotoDetailsState = useSelector((state) => state.airPhotoDetails);
  const { loading, error, airPhoto } = airPhotoDetailsState;

  useEffect(() => {
    dispatch(getAirPhotoDetails({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(airPhotoDetailsActions.clearAirPhotoDetailsData());
    };
  }, [dispatch]);
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        airPhoto._id !== undefined && <AirPhoto airPhoto={airPhoto} />
      )}
    </React.Fragment>
  );
};
export default AirPhotoScreen;
