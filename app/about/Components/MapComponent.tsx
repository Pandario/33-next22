'use client'
import React, { useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';


const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 52.3676, 
  lng: 5.2167, 
};

const MapComponent: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey  
  });

  const [showInfoWindow, setShowInfoWindow] = useState(false);
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
    <div className="flex justify-center items-center">
      <div className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] md:p-0 p-4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          
        <Marker 
            position={center}
            onClick={() => setShowInfoWindow(true)} 
        />
        { showInfoWindow && (
          <InfoWindow
            position={center}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div className="">
              <h3>Our place</h3>
              <p>Information about our place.</p>
            </div>
          </InfoWindow>
        )

        }
        </GoogleMap>
      </div>
    </div>
  ) : <></>;
};

export default React.memo(MapComponent);