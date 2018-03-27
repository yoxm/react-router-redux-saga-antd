import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configStore';
import rootSaga from './sagas/rootSaga';

const store = configureStore({});
store.runSaga(rootSaga);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
