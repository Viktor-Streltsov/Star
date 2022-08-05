import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { setLocalStorege } from '@utils/localStorage';

import rootReducer from './redusers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    setLocalStorege('store', store.getState().favoriteReducer)
});

export default store;