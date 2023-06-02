import { FC, MouseEventHandler, useContext } from 'react';

import { AppContext, AppUpdateContext } from './providers/AppContext';
import { updateCount } from './providers/reducer';
import './styles/index.scss';

const App: FC = () => {
  const { count } = useContext(AppContext);
  const dispatch = useContext(AppUpdateContext);

  const handleIncrement: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(updateCount(count + 1));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default App;
