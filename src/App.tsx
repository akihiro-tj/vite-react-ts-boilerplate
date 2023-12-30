import { MouseEventHandler, useCallback } from 'react';

import Button from './components/Button';
import AppProvider, {
  useAppContext,
  useAppDispatch,
} from './providers/context';

const Content = () => {
  const { count } = useAppContext();
  const dispatch = useAppDispatch();

  const handleDecrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch({ type: 'DECREMENT_COUNT' });
    }, [dispatch]);

  const handleIncrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch({ type: 'INCREMENT_COUNT' });
    }, [dispatch]);

  return (
    <>
      <div>Count: {count}</div>
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={handleIncrement}>+</Button>
    </>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  );
};

export default App;
