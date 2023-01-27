import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

const AirPhoto = ({ airPhoto }) => {
  const airPhotoDate = new Date(airPhoto.date);
  const airPhotoYear = airPhotoDate.getFullYear();
  const airPhotoMonth = airPhotoDate.toLocaleString('en', {
    month: 'long',
  });
  const airPhotoDay = airPhotoDate.getDate();
  const airPhotoDateString = `${airPhotoMonth} ${airPhotoDay}, ${airPhotoYear}`;
  return (
    <Card
      className='w-100 h-80 my-3 p-3 rounded text-center'
      style={{ backgroundColor: '#1D364C' }}
    >
      <Link
        style={{
          height: '100%',
        }}
        to={`/airphoto/${airPhoto._id}`}
      >
        <Card.Img
          style={{
            height: '100%',
          }}
          src={airPhoto.photo}
          variant='top'
        />
      </Link>
      <Card.Body>
        <Link to={`/airphoto/${airPhoto._id}`}>
          <Card.Title as='div'>
            <strong>{airPhoto.aircraft}</strong>
          </Card.Title>
        </Link>
        <Card.Text style={{ color: '#fff' }}>
          <strong>{airPhotoDateString}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AirPhoto;
