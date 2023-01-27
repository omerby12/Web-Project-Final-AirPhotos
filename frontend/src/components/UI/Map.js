import React, { useState, memo } from 'react';
import PropType from 'prop-types';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { DrawingManager } from '@react-google-maps/api';

const LIBRARIES = ['drawing'];
const GOOGLE_MAP_API_KEY = 'AIzaSyBC3bZuIK4dNX0kW_LSrXdsmoV7lMmzMMA';

const Map = React.memo(({ containerStyle, center, zoom, onSetMarker }) => {
  console.log('RUN AGAIN');
  const [marker, setMarker] = useState(null);
  const handleOnMarkerCompleted = (newMarker) => {
    const { position } = newMarker;
    const lat = position.lat();
    const lng = position.lng();
    onSetMarker([lng, lat]);
    if (marker) {
      marker.setMap(null);
    }
    setMarker(newMarker);
  };

  return (
    <LoadScript libraries={LIBRARIES} googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <DrawingManager
          drawingMode='marker'
          options={{
            drawingControl: true,
            drawingControlOptions: { drawingModes: ['marker'] },
          }}
          onMarkerComplete={handleOnMarkerCompleted}
        />
      </GoogleMap>
    </LoadScript>
  );
});

Map.propTypes = {
  zoom: PropType.number,
};

Map.defaultProps = {
  zoom: 19,
};

export default memo(Map);
