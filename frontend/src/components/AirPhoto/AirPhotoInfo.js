import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

const AirPhotoInfo = ({ airPhoto }) => {
  const airPhotoDate = new Date(airPhoto.date);
  const airPhotoYear = airPhotoDate.getFullYear();
  const airPhotoMonth = airPhotoDate.toLocaleString('en', {
    month: 'long',
  });
  const airPhotoDay = airPhotoDate.getDate();
  const airPhotoDateString = `${airPhotoMonth} ${airPhotoDay}, ${airPhotoYear}`;

  return (
    <React.Fragment>
      <Col md={12} className='rounded text-center'>
        <ListGroup.Item
          style={{
            borderBottom: '1px solid #000',
            color: '#1D364C',
            backgroundColor: '#698199',
            fontWeight: 'bold',
            border: '1px solid #000',
            fontFamily: 'Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
          }}
        >
          <strong>Aircraft</strong>
        </ListGroup.Item>
      </Col>
      <Col md={12} className='rounded text-center'>
        <ListGroup.Item
          style={{
            borderBottom: '1px solid #000',
            color: '#fff',
            backgroundColor: '#1D364C',
            fontWeight: 'bold',
            border: '1px solid #000',
            fontFamily: 'Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
          }}
        >
          <strong>{airPhoto.aircraft}</strong>
        </ListGroup.Item>
      </Col>
      <Col md={12} className='rounded text-center'>
        <ListGroup.Item
          style={{
            borderBottom: '1px solid #000',
            color: '#1D364C',
            backgroundColor: '#698199',
            fontWeight: 'bold',
            border: '1px solid #000',
            fontFamily: 'Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
          }}
        >
          <strong>Date</strong>
        </ListGroup.Item>
      </Col>
      <Col md={12} className='rounded text-center'>
        <ListGroup.Item
          style={{
            borderBottom: '1px solid #000',
            color: '#fff',
            backgroundColor: '#1D364C',
            fontWeight: 'bold',
            border: '1px solid #000',
            fontFamily: 'Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
          }}
        >
          <strong>{airPhotoDateString}</strong>
        </ListGroup.Item>
      </Col>
      <Col md={12} className='rounded text-center'>
        <ListGroup.Item
          style={{
            borderBottom: '1px solid #000',
            color: '#1D364C',
            backgroundColor: '#698199',
            fontWeight: 'bold',
            border: '1px solid #000',
            fontFamily: 'Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
          }}
        >
          <strong>Caption</strong>
        </ListGroup.Item>
      </Col>
      <Col md={12} className='rounded text-center'>
        <ListGroup.Item
          style={{
            borderBottom: '1px solid #000',
            color: '#fff',
            backgroundColor: '#1D364C',
            fontWeight: 'bold',
            border: '1px solid #000',
            fontFamily: 'Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
          }}
        >
          <strong>{airPhoto.caption}</strong>
        </ListGroup.Item>
      </Col>
    </React.Fragment>
  );
};

export default AirPhotoInfo;
