import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

// run react built in server: npm start
// run server I built: npm run server <~ currently on port 5000
