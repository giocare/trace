import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Form extends Component {

  state = {
    first_name: '',
    last_name: '',
    email:'',
    jsonData: []
  }

  handleEvent = e => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  };

  formHandler = e => {
    e.preventDefault();
    const { first_name, last_name, email } = this.state;
    // console.log(`First Name : ${first_name}`);
    // console.log(`Last Name : ${last_name}`);
    // console.log(`Email : ${email}`);
    const searchUrl = '/api/search';
    const options = {
      params: {
        first_name,
        last_name,
        email    
        }
      }
    axios.get(searchUrl, options).then(res => {
      console.log(res.data);
      let error = "Thank you.";
          // gets element with id 'form_message" and prints the error on the screen
          document.getElementById('form_message').innerHTML = error;
      this.setState({ 
        jsonData: JSON.stringify(res.data)
      });
    })
    .catch((e) => {
      console.log("Error");
    })
  };


  render() {
    return (
      <React.Fragment>
        <h1>Let's Find Your Data </h1>
        <form onSubmit={this.formHandler}>
          <label> First Name:</label>
          <input 
            name='first_name' 
            onChange={e=> this.handleEvent(e)}
            />
          <p></p>
          <label> Last Name:</label>
          <input 
            name='last_name' 
            onChange={e=> this.handleEvent(e)}
            />
          <p></p>
          <label> Email Address:</label>
          <input 
            name='email' 
            onChange={e=> this.handleEvent(e)}
            />
          <p></p>
          <button>Submit</button>
          <button><Link to="/display">Check Results</Link></button>
          <p id="form_message"></p>
        </form>
      </React.Fragment>
    );
  }
}