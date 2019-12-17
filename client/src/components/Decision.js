import React, {Component} from "react";
import YesPage from '../components/YesPage';
import NoPage from '../components/NoPage';



export default class Decision extends Component {
  state = {
    buttonPressed: ''
  }

  yesHandler = e => {
    e.preventDefault();
    this.setState({
      buttonPressed: 'yes'
    })
    console.log("Yes button pressed")
    };
  
    noHandler = e => {
    e.preventDefault();
    this.setState({
      buttonPressed: 'no'
    })
    console.log("No button pressed")
    };

	render(){
    if(this.state.buttonPressed === ''){
      return(
        <div className="decision-container">
          <h4>Is this your information?</h4>
          <button onClick={this.yesHandler}>Yes</button>
          <button onClick={this.noHandler}>No</button>
        </div>
      )
    }
    else if(this.state.buttonPressed === 'yes'){
      return(
      <YesPage />
      )
    }
    else if(this.state.buttonPressed === 'no'){
      return(
        <NoPage />
      )
    } 
  }
}