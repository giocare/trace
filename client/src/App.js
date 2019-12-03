// import React, { Component } from 'react';
// import Form from './components/Form';
// import DisplayUsers from './components/DisplayUsers';
// import axios from 'axios';
// import './App.css';
// class App extends Component {
//   state = {
//     users: []
//   }

//   componentDidMount = () => {
//     this.fetchUsers();
//   };

//   fetchUsers = () => {
//     axios.get('/users')
//       .then((response) => {
//         const { users } = response.data;
//         this.setState({ users: [...this.state.users, ...users] })
//       })
//       .catch(() => alert('Error fetching new users'));
//   };


//   addUser = ({ name, position, company }) => {
//     this.setState({
//       users: [...this.state.users, { name, position, company }]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Form addUser={this.addUser}/>
//         < DisplayUsers users={this.state.users} />

//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import DisplayData from './components/DisplayData';

import Form from './components/Form';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Form} />
        <Route exact path="/display" component={DisplayData} />
      </div>
    </Router>
  );
}

export default App;
