import { combineReducers } from 'redux';

import { cars } from './home';
import { layout } from './layout';

export default combineReducers({
    cars,
    layout
});