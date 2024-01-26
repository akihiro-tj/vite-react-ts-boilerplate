import { FunctionComponent } from 'react';

import Button from '../../components/Button';

import useApp from './hooks';

const App: FunctionComponent = () => {
  const { count, handleDecrement, handleIncrement } = useApp();

  return (
    <>
      <div>Count: {count}</div>
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={handleIncrement}>+</Button>
    </>
  );
};

export default App;
