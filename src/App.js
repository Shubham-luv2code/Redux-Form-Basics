import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import EmployeeBasicDetails from './components/EmployeeBasicDetails';
import DefaultLayout from './layout/DefaultLayout'
function App() {
  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className='navbar-brand'>
          <h4>Employee Registration Form</h4>
        </div>
      </nav>
      <BrowserRouter>
      <Switch>
					<Route path="/" name="Home" component={DefaultLayout} />
				</Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
