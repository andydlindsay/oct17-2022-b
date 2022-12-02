import {useEffect, useState} from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      console.log(event.clientX, event.clientY);
      setCoords({
        x: event.clientX,
        y: event.clientY
      });
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    const cleanup = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    return cleanup;
  }, []);

  return coords;
};

export default useMousePosition;
