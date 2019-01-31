import React, { Component } from 'react';

class UserList extends Component{
    constructor(props){
        super(props);
        this.state={displayDetails:false}
    }

    showDetils = () => {
        this.setState({displayDetails: !this.state.displayDetails});
    }

    render(){
        const user = this.props.user;
        return (
          <li className="mdl-list__item mdl-list__item--two-line" onClick={this.showDetils}>
              <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>{user.name.first} {user.name.last}</span>
                  <span style={{display: this.state.displayDetails  ? 'block' : 'none'}} className="mdl-list__item-sub-title">
                      Email: {user.email} Cell: {user.cell}
                  </span>
            
              </span>
          </li>
        );
    }
}
export default UserList;