import React from 'react';

const Icon = props => (
  <img src={ iconUrls(props.name) } />
);

const iconUrls = name => {
  console.log(name);
  switch (name) {
    case 'tic-tac-toe':
      return '/icons/tictactoe.png';
  }
}

export default Icon