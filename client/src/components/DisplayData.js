import React, { Component } from 'react';
import axios from 'axios';



export default class DisplayData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			json: '',
		}
	  }
	

  componentDidMount () {
    const generateGetUrl = '/api/send-data';
    axios.get(generateGetUrl).then(res => {
		console.log(res.data);
		this.setState({
			json: res.data
		})
    });
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
			{this.state.json.person.dob ? 
				<ul>
					{
						<li>You've been existing for {this.state.json.person.dob.display} </li>
					}
				</ul> 
					
				: <p></p> }

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

		  </div>
	  )

  }

  multiplePpl = e => {		
		return(
		<div>
			  <p>We have found {this.state.json[`@persons_count`]} people</p>
		  <div className="person-container">
			
				{
					this.state.json.possible_persons.map(function(person, i){
						return (
							<div className="person-card">
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
										<ul>
											{person.dob ? <p>You've been existing for {person.dob.display} </p> : <p></p> }
										</ul>
										

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
	  else {
		  return (
				<div>
					<h1>Results:</h1>

					{ console.log(this.state.json[`@persons_count`])}
					{ this.state.json[`@persons_count`] === 1 ? this.onePerson() : <p></p>}

					{ this.state.json[`@persons_count`] > 1 ? this.multiplePpl() : <p></p> }

					{ this.state.json[`@persons_count`] === undefined ? <h1>We were unable to find your information</h1> : <p></p> }





			</div>
			  
		  )
	  }
  }

}


