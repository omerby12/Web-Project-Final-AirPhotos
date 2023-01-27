import React from 'react';
import { Col, Image, ListGroup } from 'react-bootstrap';

const AirPhotoImg = ({ airPhoto }) => {
  return (
    <Col md={6} sm={12} className='rounded text-center w-100 h-80 my-3 p-3'>
      <ListGroup style={{ backgroundColor: '#1D364C' }} variant='flush'>
        <ListGroup.Item
          style={{
            backgroundColor: '#1D364C',
            boxShadow: '0 0 25px #000',
            height: '50vh',
            boxSizing: 'border-box',
          }}
        >
          <Image
            style={{
              height: '100%',
              width: '100%',
            }}
            src={airPhoto.photo}
            alt={airPhoto.aircraft}
            fluid
          />
        </ListGroup.Item>
      </ListGroup>

      <ListGroup.Item
        style={{ backgroundColor: '#1D364C', boxShadow: '0 0 25px #000' }}
      >
        <strong style={{ color: '#fff' }}>{airPhoto.aircraft}</strong>
      </ListGroup.Item>
    </Col>
  );
};

export default AirPhotoImg;
