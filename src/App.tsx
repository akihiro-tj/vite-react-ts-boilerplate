import { FC, MouseEventHandler, useContext } from 'react';

import { AppContext, AppUpdateContext } from './AppContext';
import { updateCount } from './reducer';
import './styles/index.scss';

export const App: FC = () => {
  const { count } = useContext(AppContext);
  const dispatch = useContext(AppUpdateContext);

  const handleIncrement: MouseEventHandler<HTMLButtonElement> = () => {
    if (!dispatch) return;
    dispatch(updateCount(count + 1));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
