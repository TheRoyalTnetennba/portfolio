import { combineReducers } from 'redux';
import GamesReducer from './games_reducer';

const RootReducer = combineReducers({
  games: GamesReducer,
});

export default RootReducer;
