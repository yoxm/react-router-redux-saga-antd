import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducer/rootReducers';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
  const history = createHistory();
  const routeMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [routeMiddleware, sagaMiddleware];
  const enhancers = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const store = createStore(
    combineReducers({
      root: rootReducer,
      router: routerReducer,
    }),
    initialState,
    enhancers
  );
  store.history = history;
  store.runSaga = sagaMiddleware.run;
  return store;
}
