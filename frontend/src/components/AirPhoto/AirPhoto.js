import React from 'react';
import { Row } from 'react-bootstrap';
import AirPhotoImg from './AirPhotoImg';
import AirPhotoLocation from './AirPhotoLocation';
import AirPhotoInfo from './AirPhotoInfo';

const AirPhoto = ({ airPhoto }) => {
  return (
    <React.Fragment>
      <Row>
        <AirPhotoImg airPhoto={airPhoto} />
        <AirPhotoLocation airPhoto={airPhoto} />
      </Row>
      <Row>
        <AirPhotoInfo airPhoto={airPhoto} />
      </Row>
    </React.Fragment>
  );
};

export default AirPhoto;
