import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../UI/Message';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../UI/Loader';
import axios from 'axios';

import {
  airPhotoCreateActions,
  airPhotoCreate,
} from '../../features/airPhoto/airPhotoCreateSlice';

const InputForm = ({ markerRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);

  const [aircraft, setAircraft] = useState('');
  const [date, setDate] = useState('');
  const [caption, setCaption] = useState('');

  const airPhotoCreateState = useSelector((state) => state.airPhotoCreate);
  const { airPhoto, success, error } = airPhotoCreateState;

  useEffect(() => {
    if (success) {
      navigate(`/airphoto/${airPhoto._id}`);
      dispatch(airPhotoCreateActions.clearAirPhotoCreateData());
    }
    // eslint-disable-next-line
  }, [navigate, success]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(image, markerRef.current, aircraft, date, caption);
    dispatch(
      airPhotoCreate({
        airPhoto: {
          photo: image,
          location: {
            type: 'Point',
            coordinates: markerRef.current,
          },
          aircraft,
          date,
          caption,
        },
      })
    );
  };

  return (
    <React.Fragment>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mt-2' controlId='image'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter image url'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
          <Form.Control
            type='file'
            id='image-file'
            label='Choose file'
            custom
            onChange={uploadFileHandler}
          />
          {uploading && <Loader />}
        </Form.Group>

        <Form.Group className='mt-2' controlId='aircraft'>
          <Form.Label>Aircraft Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Aircraft Name'
            value={aircraft}
            onChange={(e) => setAircraft(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mt-2' controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Enter Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mt-2' controlId='caption'>
          <Form.Label>Caption</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Caption'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className='mt-3' type='submit' variant='success'>
          Upload Photo
        </Button>
      </Form>
      {error && <Message variant='danger'>{error}</Message>}
    </React.Fragment>
  );
};

export default InputForm;
