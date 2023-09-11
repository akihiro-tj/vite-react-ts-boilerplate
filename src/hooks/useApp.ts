import { MouseEventHandler, useCallback, useContext } from 'react';

import {
  AppContext,
  AppUpdateContext,
} from '../providers/app/AppContextProvider';
import { updateCount } from '../providers/app/appReducer';

export const useApp = () => {
  const { count } = useContext(AppContext);
  const dispatch = useContext(AppUpdateContext);

  const handleDecrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch(updateCount(prev => prev - 1));
    }, [dispatch]);

  const handleIncrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch(updateCount(prev => prev + 1));
    }, [dispatch]);

  return { count, handleDecrement, handleIncrement };
};
