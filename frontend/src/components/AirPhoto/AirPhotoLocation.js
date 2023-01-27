import React from 'react';
import { Col } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const AirPhotoLocation = ({ airPhoto }) => {
  const LIBRARIES = ['marker'];
  const GOOGLE_MAP_API_KEY = 'AIzaSyBC3bZuIK4dNX0kW_LSrXdsmoV7lMmzMMA';

  const mapContainerStyle = {
    height: '57vh',
    width: '100%',
  };
  const center = {
    lat: airPhoto.location.coordinates[1],
    lng: airPhoto.location.coordinates[0],
  };

  const position = {
    lat: airPhoto.location.coordinates[1],
    lng: airPhoto.location.coordinates[0],
  };

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };
  return (
    <Col md={6} sm={12} className='rounded text-center w-100 h-80 my-3 p-3'>
      <LoadScript libraries={LIBRARIES} googleMapsApiKey={GOOGLE_MAP_API_KEY}>
        <GoogleMap
          id='marker-example'
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={center}
        >
          <Marker onLoad={onLoad} position={position} />
        </GoogleMap>
      </LoadScript>
    </Col>
  );
};

export default AirPhotoLocation;
