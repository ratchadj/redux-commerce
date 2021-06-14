import { createStore } from 'redux';
import reducers from "./reducers"
import middleware from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
  middleware,
));

export default store;