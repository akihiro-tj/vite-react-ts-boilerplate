import { Action } from '../../types';

export type AppState = {
  count: number;
};

export const initialAppState: AppState = {
  count: 0,
};

// Action types
const UPDATE_COUNT = 'UPDATE_COUNT';

// Actions
type UpdateCountCallback = (prev: number) => number;
export const updateCount = (payload: number | UpdateCountCallback) => {
  return {
    type: UPDATE_COUNT,
    payload,
  };
};

// Reducer
export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case UPDATE_COUNT: {
      const count =
        typeof action.payload === 'function'
          ? (action.payload as UpdateCountCallback)(state.count)
          : (action.payload as number);

      return {
        ...state,
        count,
      };
    }

    default: {
      return state;
    }
  }
};
