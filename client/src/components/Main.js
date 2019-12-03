import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render(){
    return(
      <div>
        <form className="form-group">
            <p>anon$ Who are you?</p>
            <p>anon$ What is your first name:</p>
            <p>anon$ <input type="text" className="form-control" /></p>
            <p>anon$ What is your last name:</p>
            <p>anon$ <input type="text" className="form-control" /></p>
            <p>anon$ What is your email:</p>
            <p>anon$ <input type="text" className="form-control" /></p>
            <p>anon$ Press Enter:</p>
            <p>anon$ <input type="submit" value="Submit" /></p>
        </form>
      </div>
    );
  }
}

export default Main;
