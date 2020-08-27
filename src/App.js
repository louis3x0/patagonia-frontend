import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
