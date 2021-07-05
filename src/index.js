import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Components/dashboardComponent/Dashboard'
import reportWebVitals from './reportWebVitals';
import  Login from './Components/loginComponent/Login';
import Calendar from './Components/calendarComponent/calendar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Register from './Components/registerComponent/Register';
import Users from './Components/loggedUsers/Users'


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
  <Switch>
    <Route path="/dashboard" component={Dashboard} /> 
    <Route exact path="/" component={Login} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/register" component={Register} />
    <Route path="/users" component={Users} />
  </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
