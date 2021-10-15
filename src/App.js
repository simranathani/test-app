import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Test from './Test';
import Checkout from './Checkout';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename="">
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/' component={Test} />        
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
