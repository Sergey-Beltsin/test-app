import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import mainReducer from './reducers/main';

const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.posts.length) nextState.posts = [...state.posts];
    if (state.users.length) nextState.users = [...state.users];
    return nextState;
  }
  return mainReducer(state, action);
};

export const makeStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
