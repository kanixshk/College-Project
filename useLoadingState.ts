import { useState, useCallback } from 'react';

export const useLoadingState = (duration = 1000) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, duration);
  }, [duration]);

  return { isLoading, startLoading };
};