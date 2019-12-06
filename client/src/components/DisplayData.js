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

  onePerson = e => {
	  return(
		  <div>
			  {console.log("One Person Found")}
			{/* NUM OF PPL */}
			<p>We have found {this.state.json[`@persons_count`]} person</p>

			{/* NAME */}
			<p>Name: {this.state.json.person.names[0].display} </p>

			{/* PHONE NUMBER */}
			{this.state.json.person.phones ? 
				<ul>You can be reached at 
				{
					this.state.json.person.phones.map(function(item, i){
						return (
							<li key={i}>{item.display}</li>
						)	
					})
				}
				</ul> : <p></p>}

			{/* AGE */}
			{this.state.json.person.dob.display ? <p>You've been existing for {this.state.json.person.dob.display} </p> : <p></p> }

			{/* ADDRESS */}
			{this.state.json.person.addresses ?
				<ul>You have lived at the following locations:
				{
					this.state.json.person.addresses.map(function(item, i){
						return (
							<li key={i}>{item.display}</li>
						)			
					})
				}
				</ul> : <p></p>
			}


			{/* EDUCATIONS */}
			{this.state.json.person.educations ? 
				<ul>You studied: 
				{
					this.state.json.person.educations.map(function(item, i){
						return (
							<li key={i}>{item.display}</li>
						)	
					})
				}
				</ul> : <p></p>}

			{/* JOBS */}
			{this.state.json.person.jobs ? <ul>Previous Jobs Located: 
				{
					this.state.json.person.jobs.map(function(item, i){
						return (
							<li key={i}>{item.display}</li>
						)	
					})
				}
				</ul> : <p></p>}


			{/* ONLINE ACCOUNTS */}
			{this.state.json.person.urls ?
				<ul>Social Social Butterfly, guess whose account was found online. Accounts have been located on 
				{
					this.state.json.person.urls.map(function(item, i){
						return (
							<li key={i}>{item[`@domain`]}</li>
						)	
					})
				}
				</ul> : <p></p>
			}

			<div className="decision-container">
				<h4>Is this your information?</h4>
				<button onClick={this.yesHandler}>Yes</button>
				<button onClick={this.noHandler}>No</button>
			</div>
		  </div>
	  )

  }

  multiplePpl = e => {		
		return(
		  <div>
			  <p>We have found {this.state.json[`@persons_count`]} people</p>
				{
					this.state.json.possible_persons.map(function(person, i){
						return (
							<div>
								<h2 key={i}>Person {i+1}</h2>

									{/* NAME */}
									{person.names ? 
										<ul>
										{
											person.names.map(function(item, i){
												return (
													<p key={i}>Name: {item.display}</p>
												)	
											})
										}
										</ul> : <p></p>}

									{/* PHONE NUMBER */}
									{person.phones ? 
										<ul> You can be reached at
										{
											person.phones.map(function(item, i){
												return (
													<li key={i}>{item.display}</li>
												)	
											})
										}
										</ul> : <p></p>}

										{/* AGE */}
										{person.dob ? <p>You've been existing for {person.dob.display} </p> : <p></p> }


										{/* ADDRESS */}
										{person.addresses ? 
										<ul> You have lived at the following locations:
										{
											person.addresses.map(function(item, i){
												return (
													<li key={i}>{item.display}</li>
												)	
											})
										}
										</ul> : <p></p>}

										{/* EDUCATIONS */}
										{person.educations ? 
										<ul> You studied:
										{
											person.educations.map(function(item, i){
												return (
													<li key={i}>{item.display}</li>
												)	
											})
										}
										</ul> : <p></p>}



										{/* JOBS */}
										{person.jobs ? 
										<ul> Previous Jobs Located: 
										{
											person.jobs.map(function(item, i){
												return (
													<li key={i}>{item.display}</li>
												)	
											})
										}
										</ul> : <p></p>}


										
										{/* SOCIAL MEDIA */}
										{person.urls ? 
										<ul> Social Social Butterfly, guess whose account was found online. Accounts have been located on 
										{
											person.urls.map(function(item, i){
												return (
													<li key={i}>{item[`@domain`]}</li>
												)	
											})
										}
										</ul> : <p></p>}
							</div>
						)	
					})
				}

					<div className="decision-container">
						<h4>Is this your information?</h4>
						<button onClick={this.yesHandler}>Yes</button>
						<button onClick={this.noHandler}>No</button>
					</div>
		  </div>
		);
  }
  

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

					{ console.log(this.state.json[`@persons_count`])}
					{ this.state.json[`@persons_count`] === 1 ? this.onePerson() : <p></p>}

					{ this.state.json[`@persons_count`] > 1 ? this.multiplePpl() : <p></p> }

					{ this.state.json[`@persons_count`] == undefined ? <h1>We were unable to find your information</h1> : <p></p> }





			</div>
			  
		  )
	  }
  }

}


