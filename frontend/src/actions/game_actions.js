import { fetchGames } from '../utils/api_utils';

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: [],
});

export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games,
});

export const requestGames = () => dispatch => (
  fetchGames()
    .then((response) => response.json())
    .then(games => {
      dispatch(receiveGames(games));
      dispatch(clearErrors());
    })
    .catch(error => dispatch(receiveErrors(error)))
);