import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import mainReducer from './reducers/main';

const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

export const makeStore = () => createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
