import {combineReducers} from 'redux';
import appInfo from './appInfo';

const rootReducer = combineReducers({
  appInfo,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
