export type AppState = {
  count: number;
};

export const initialState: AppState = {
  count: 0,
};

// Action types
const UPDATE_COUNT = 'UPDATE_COUNT';

// Actions
export const updateCount = (count: number) => {
  return {
    type: UPDATE_COUNT,
    payload: count,
  };
};

export type Action = ReturnType<typeof updateCount>;

// Reducer
export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case UPDATE_COUNT: {
      return {
        ...state,
        count: action.payload as number,
      };
    }

    default: {
      return state;
    }
  }
};
