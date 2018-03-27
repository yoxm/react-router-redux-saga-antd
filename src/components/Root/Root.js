import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import getRoute from '../../router/routers';
const Root = ({ store }) => (
  <Provider store={store}>{getRoute(store.history)}</Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root;
