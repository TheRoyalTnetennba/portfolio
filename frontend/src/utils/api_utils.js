
const baseURL = 'http://localhost:5000/';

const getForm = (obj) => {
  const payload = Object.assign(obj);
  return JSON.stringify(payload);
};

export const prepGUser = (response) => ({
  uid: response.user.uid,
  token: response.credential,
  displayName: response.user.displayName,
  email: response.user.email,
  photoURL: response.user.photoURL,
});


// anatomy of a pre-request api object
// {
//   gameName: nameOfGameInCamelCase
//   gameState: boardOrHandOrOtherRelevantGameInfo
//   marker: theIdentifyingGamePieceOfTheAI
// }

const headers = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
});

// const header = new Headers({
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Credentials': true,
//   'Authorization': 'Bearer petunias',
// });


export const sendLogin = (user) => (
  fetch(`${baseURL}login`, {
    headers,
    method: 'POST',
    body: getForm(user),
  })
);

export const validateToken = () => (
  fetch(`${baseURL}token`, {
    headers,
    method: 'POST',
    body: getForm({}),
  })
);

export const tttExchange = request => (
  fetch(`${baseURL}game/ttt`, {
    headers,
    method: 'POST',
    credentials: 'include',
    body: getForm(request),
  })
);

export const sendLogout = () => (
  fetch(`${baseURL}game/logout`, {
    headers,
    method: 'POST',
    body: getForm({}),
  })
);


export const fetchGames = () => (
  fetch(`${baseURL}games`, {
    headers,
    method: 'GET',
  })
);
