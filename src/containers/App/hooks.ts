import { MouseEventHandler, useCallback, useState } from 'react';

const useApp = () => {
  const [count, setCount] = useState(0);

  const handleDecrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setCount(prev => prev - 1);
    }, []);

  const handleIncrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setCount(prev => prev + 1);
    }, []);

  return { count, handleDecrement, handleIncrement };
};

export default useApp;
