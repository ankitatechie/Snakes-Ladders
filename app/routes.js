import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import Game from './components/Game';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Game} />
            </Route>
        </Router>
    </Provider>
);

export default router;
