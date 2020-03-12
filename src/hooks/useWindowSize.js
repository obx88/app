import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({});
  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return size;
};
export default useWindowSize;