import { useEffect, useState } from 'react';

export function useSmallAndLargeSizes<T>(small: T, large: T) {
  const [size, setSize] = useState('7rem');

  useEffect(() => {
    const updatesize = () => {
      if (window.innerWidth < 768) {
        // For smaller screens
        setSize('0');
      } else {
        // For larger screens
        setSize('7rem');
      }
    };

    // Update player width on window resize
    window.addEventListener('resize', updatesize);

    // Call the function initially
    updatesize();

    // Cleanup
    return () => window.removeEventListener('resize', updatesize);
  }, []);
}
