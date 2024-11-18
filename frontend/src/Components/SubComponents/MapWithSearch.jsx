import { useState } from 'react';
import Search_Stop from './Search_Stop';
import Map from './Map';

const MapWithSearch = () => {
  const [markerPosition, setMarkerPosition] = useState([28.6139, 77.2088]); // Default position

  const handleSearch = (newPosition) => {
    setMarkerPosition(newPosition); // Update marker position
  };

  return (
    <div>
      <Search_Stop onSearch={handleSearch} />
      <Map markerPosition={markerPosition} />
    </div>
  );
};

export default MapWithSearch;