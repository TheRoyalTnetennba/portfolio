import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';


const App = ({ store }) => {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
};

export default App;
