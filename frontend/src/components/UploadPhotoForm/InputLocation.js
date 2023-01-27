import React from 'react';
import { Form } from 'react-bootstrap';
import Map from '../UI/Map';

const InputLocation = ({ setMarkerHandler }) => {
  const containerStyle = {
    width: '100%',
    height: '90vh',
  };

  return (
    <Form>
      <Form.Group className='mt-2' controlId='location'>
        <Form.Label>Location</Form.Label>
        <Map
          containerStyle={containerStyle}
          center={{ lat: 32.91600649264087, lng: 35.290135095662315 }}
          zoom={12}
          onSetMarker={setMarkerHandler}
        />
      </Form.Group>
    </Form>
  );
};

export default InputLocation;
