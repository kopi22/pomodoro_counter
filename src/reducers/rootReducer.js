import { combineReducers } from 'redux';

import timerReducer from './timerReducer';
import activitiesReducer from './activitiesReducer';

const rootReducer = combineReducers({
    timer: timerReducer,
    activities: activitiesReducer
});

export default rootReducer;