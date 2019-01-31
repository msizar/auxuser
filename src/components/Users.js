import React, { Component } from 'react';
import Api from '../Api';
import UserList from './UserList'

class Users extends Component{

    constructor(props){
      super(props);
        this.state = {
          isLoaded : false,
          users: [],
      };
    }

    componentDidMount() {
      fetch(Api.getAll)
          .then(res => res.json())
          .then(data => {
              console.log(data.results)
            this.setState({
              isLoaded: true,
              users: data.results
            });
          });
    }


    render(){   
        var { isLoaded, users } = this.state 

        if (!isLoaded){
          return <div>Loading....</div>
        }else {
          return(
          <div className ="App">
            <ul  className="list  mdl-list">
              {users.map((user,index) => <UserList user={user}  key ={user.login.uuid}></UserList>)}
            </ul>
          </div>);
      }
    }
  }
  export default Users;