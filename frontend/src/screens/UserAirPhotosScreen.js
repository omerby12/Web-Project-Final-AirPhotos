import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/UI/Message';
import Loader from '../components/UI/Loader';
import { getMyAirPhotoList } from '../features/airPhoto/airPhotoListMySlice';

const UserAirPhotosScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);
  const { userInfo } = userState;

  const airPhotoListMy = useSelector((state) => state.airPhotoListMy);
  const { loading, error, airPhotos } = airPhotoListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      dispatch(getMyAirPhotoList());
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <Row>
      <Col md={12}>
        <h2>My Photos</h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            className='table-sm'
            variant='info'
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>AIRCRAFT</th>
                <th>DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {airPhotos.map((airPhoto) => (
                <tr key={airPhoto._id}>
                  <td>{airPhoto._id}</td>
                  <td>{airPhoto.aircraft}</td>
                  <td>{new Date(airPhoto.date).toDateString()}</td>
                  <td>
                    <LinkContainer to={`/airphoto/${airPhoto._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default UserAirPhotosScreen;
