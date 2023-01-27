import React, { useRef } from 'react';

import InputLocation from './InputLocation';
import InputForm from './InputForm';

const UploadPhotoForm = () => {
  const markerRef = useRef(null);
  const setMarkerRef = (marker) => {
    markerRef.current = marker;
  };

  return (
    <React.Fragment>
      <h1>Upload Photo:</h1>
      <InputLocation setMarkerHandler={setMarkerRef} />
      <InputForm markerRef={markerRef} />
    </React.Fragment>
  );
};

export default UploadPhotoForm;
