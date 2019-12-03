import React, { Component } from 'react';
import axios from 'axios';
import YesPage from '../components/YesPage';
import NoPage from '../components/NoPage';



export default class DisplayData extends Component {

	state = {
		json: '',
		buttonPressed: undefined
	}

  componentDidMount () {
    const generateGetUrl = '/api/send-data';
    axios.get(generateGetUrl).then(res => {
		// console.log(res.data);
		this.setState({
			json: res.data
		})
		//console.log(this.state.json.query.person.phones[0].number)
    });
  };

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

  render() {
	  if (this.state.json === '' & this.state.buttonPressed === undefined){
		  return (
			<div>
				<h1>Results:</h1>
			  	<h4>Waiting For A User</h4>
			</div>
		  )
	  }

	  else if(this.state.json !== '' & this.state.buttonPressed === 'yes'){
		  return(
			<YesPage />
		  )
	  }
	  else if(this.state.json !== '' & this.state.buttonPressed === 'no'){
		return(
		  <NoPage />
		)
	}
	  else {
		  return (
				<div>
					<h1>Results:</h1>
					<p>We have found {this.state.json[`@persons_count`]} person</p>
					<p>Name: {this.state.json.query.person.names[0].display} </p>

					{/* <p>You live at {this.state.json.query.person.addresses[0].display} </p> */}
					<p>You can be reached at {this.state.json.query.person.phones[0].number} </p>
					<p>You've been existing for {this.state.json.query.person.dob.display} </p>
					<ul>You have lived at the following locations:
					{
						this.state.json.query.person.addresses.map(function(item, i){
							return (
								<li key={i}>{item.display}</li>
							)			
						})
					}
					</ul>

					<ul>You studied: 
					{
						this.state.json.query.person.educations.map(function(item, i){
							return (
								<li key={i}>{item.display}</li>
							)	
						})
					}
					</ul>

					<ul>Previous Jobs Located: 
					{
						this.state.json.query.person.jobs.map(function(item, i){
							return (
								<li key={i}>{item.display}</li>
							)	
						})
					}
					</ul>

					<ul>Social Social Butterfly, guess whose account was found online. Accounts have been located on 
					{
						this.state.json.query.person.urls.map(function(item, i){
							return (
								<li key={i}>{item[`@domain`]}</li>
							)	
						})
					}
					</ul>
					<div className="decision-container">
						<h4>Is this your information?</h4>
						<button onClick={this.yesHandler}>Yes</button>
						<button onClick={this.noHandler}>No</button>
					</div>
			</div>
			  
		  )
	  }
  }

}


