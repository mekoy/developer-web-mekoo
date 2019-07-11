
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootreducer';


const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
