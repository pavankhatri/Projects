import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar'
import { Link } from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hscroll from './Hscroll';
import Services from './Services';
import Statistics from './Statistics';
import Process from './Process';
import HireUs from './HireUs';
import Portfolio from './Portfolio';
import Technologies from './Technologies';
import Contact from './Contact';
import { Redirect } from "react-router";


ReactDOM.render(
  <Router>
     <Navbar/>
{/*      
      <Route  path='/hscroll' component={Hscroll} exact></Route>
      <Route path='/services' component={Services} exact></Route>
      <Route path='/statistics' component={Statistics} exact></Route>
      <Route path='/process' component={Process} exact></Route>
      <Route path='/hireus' component={HireUs} exact></Route>
      <Route path='/portfolio' component={Portfolio} exact><Portfolio/></Route>
      <Route path='/technologies' component={Technologies} exact><Technologies/></Route>
      <Route path='/contact' component={Contact} exact><Contact/></Route> */}
  
    <Hscroll/>
    <Services/>
    <Statistics />
    <Process/>
    <HireUs/>
    <Portfolio/>
    <Technologies/>
    <Contact/>
  </Router>,
  document.getElementById('root')
);

