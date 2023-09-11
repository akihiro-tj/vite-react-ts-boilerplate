import { FC } from 'react';

import Button from './components/Button';
import Panel from './components/Panel';
import { useApp } from './hooks/useApp';

const App: FC = () => {
  const { count, handleDecrement, handleIncrement } = useApp();

  return (
    <>
      <Panel value={count} />
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={handleIncrement}>+</Button>
    </>
  );
};

export default App;
