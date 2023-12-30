export type AppState = {
  count: number;
};

export const initialAppState: AppState = {
  count: 0,
};

// Action types
export type ActionType =
  | {
      type: 'UPDATE_COUNT';
      payload: number | UpdateCountCallback;
    }
  | { type: 'INCREMENT_COUNT' }
  | { type: 'DECREMENT_COUNT' };
type UpdateCountCallback = (prev: number) => number;

// Reducer
export const appReducer = (state: AppState, action: ActionType): AppState => {
  switch (action.type) {
    case 'UPDATE_COUNT': {
      const count =
        typeof action.payload === 'function'
          ? action.payload(state.count)
          : action.payload;

      return { ...state, count };
    }

    case 'INCREMENT_COUNT': {
      return { ...state, count: state.count + 1 };
    }

    case 'DECREMENT_COUNT': {
      return { ...state, count: state.count - 1 };
    }

    default: {
      return state;
    }
  }
};
