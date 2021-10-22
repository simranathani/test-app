import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TableFile from './TableFile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename="">
          <Switch>
            <Route path='/' component={TableFile} />
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
