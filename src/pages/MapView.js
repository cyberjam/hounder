/* eslint-disable import/no-extraneous-dependencies */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'react-kakao-maps-sdk';
import CurrentPositionMarker from '../components/CurrentPositionMarker';
import PostButton from '../components/PostButton';

function MapView() {
  const [coord, setCoord] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  return (
    <div id="map_wrap" className="relative w-full h-96 m-0 p-0">
      <div id="map" className="relative w-full h-full">
        <div className="relative">
          <Map center={coord.center} className="w-full h-[100vh]" level={9}>
            <CurrentPositionMarker
              state={coord}
              setState={setCoord}
              iconHeight={50}
              iconWidth={50}
            />
          </Map>
        </div>
      </div>
      <Link to="/post" className="flex h-full w-full overflow-hidden">
        <PostButton />
      </Link>
    </div>
  );
}

export default MapView;
