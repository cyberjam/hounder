/* eslint react/prop-types: 0 */
import { React, useEffect } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

function CurrentPositionMarker({ state, setState, iconWidth, iconHeight }) {
  const findCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할 수 없습니다. GPS 장치를 확인 바랍니다.',
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    findCurrentPosition();
  }, []);

  return (
    <>
      {' '}
      {!state.isLoading && (
        <MapMarker
          position={state.center}
          image={{
            src: 'https://i.ibb.co/F4q5WKP/image.png',
            size: {
              width: iconWidth,
              height: iconHeight,
            },
          }}
          clickable={false}
        />
      )}
    </>
  );
}

export default CurrentPositionMarker;
