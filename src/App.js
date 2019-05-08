import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main'
import About from './components/About'
import User from './components/User'
import List from './components/List'
import './App.css';

class App extends Component{

  clickUpdate = (event) => {

  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
        <hi>Hello World</hi>
        <main>
          <Route exact path = '/' component = {Main}/>
          <Route exact path = '/about' component = {About}/>
          <Route path = '/user/:username' component = {User}/>
          <Route path = '/list' component = {List}/>
        </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
