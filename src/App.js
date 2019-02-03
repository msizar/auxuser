import React, { Component } from 'react';
import api from './api';
import './App.css';



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
          <Person></Person>
        </div>
      );
  
  }
}

class Person extends Component{

  constructor(props){
    super(props);
      this.state = {
        isLoaded : false,
        Person: [],
    };
  }

  componentDidMount() {
    fetch(api.getAll)
        .then(res => res.json())
        .then(data => {
          this.setState({
            isLoaded: true,
            items: data.results
          });
        });
  }
  render(){
 
    var { isLoaded, items } = this.state 
  
      if (!isLoaded){
        return <div>Loading....</div>
      }else {
 
        return(
        <div className ="App">
          <ul>
            {items.map(item => (
                <li key={item.email}>
                  Name: {item.name.first} {item.name.last}
                </li>
            ))}
            
          </ul>
        </div>);
    }

  }
}
export default App;
