import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import rootReducer from './reducers/index';

import game from './data/game';

const defaultState = {
    game
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(hashHistory, store);
export default store;
