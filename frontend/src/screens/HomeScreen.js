import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import AirPhoto from '../components/Cards/AirPhoto';
import Message from '../components/UI/Message';
import Loader from '../components/UI/Loader';
import Paginate from '../components/UI/Paginate';
import {
  getAirPhotos,
  airPhotosActions,
} from '../features/airPhoto/airPhotosSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword, pageNumber = 1 } = useParams();

  const airPhotosState = useSelector((state) => state.airPhotos);
  const { loading, error, airPhotos, page, pages } = airPhotosState;

  useEffect(() => {
    dispatch(getAirPhotos({ keyword, pageNumber }));
  }, [dispatch, keyword, pageNumber]);

  useEffect(() => {
    return () => dispatch(airPhotosActions.clearAirPhotosData());
  }, [dispatch]);

  console.log(airPhotos);
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <React.Fragment>
          <Row>
            {airPhotos.map((airPhoto) => (
              <Col
                className='align-items-stretch d-flex'
                key={airPhoto._id}
                sm={12}
                md={6}
                lg={4}
                xl={4}
              >
                <AirPhoto airPhoto={airPhoto} />
              </Col>
            ))}
          </Row>
          <Paginate total={pages} page={page} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HomeScreen;
