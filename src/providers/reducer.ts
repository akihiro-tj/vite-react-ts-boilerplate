export type AppState = {
  count: number;
  name: string;
};

export const initialState: AppState = {
  count: 0,
  name: 'hoge',
};

// Action types
const UPDATE_COUNT = 'UPDATE_COUNT';
const UPDATE_NAME = 'UPDATE_NAME';

// Actions
export const updateCount = (count: number) => {
  return { type: UPDATE_COUNT, payload: count };
};

export const updateName = (name: string) => {
  return { type: UPDATE_NAME, payload: name };
};

export type Action =
  | ReturnType<typeof updateCount>
  | ReturnType<typeof updateName>;

// Reducer
export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case UPDATE_COUNT: {
      return {
        ...state,
        count: action.payload as number,
      };
    }

    case UPDATE_NAME: {
      return {
        ...state,
        name: action.payload as string,
      };
    }

    default: {
      return state;
    }
  }
};
