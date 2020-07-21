import { combineReducers } from 'redux'

import empRegReducer from './empRegReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    reducerReturn: empRegReducer,
})

export default rootReducer;

