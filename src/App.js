import React, { Component } from 'react';
import './App.css';
import Users from './components/Users'

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        isLoaded : false,
        Person: [],
    };
  }

  render(){
      return(
        <div className ="App">
          <Users></Users>
        </div>
      );
  
  }
}
export default App;
