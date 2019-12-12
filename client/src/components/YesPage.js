import React, { Component } from 'react';
import Typed from 'react-typed';

class YesPage extends Component {
    render() {
        return (
            <div>
                <Typed
                    strings={[
                      'Did you know that the "triple identifier" of birthday, gender and zipcode is all that someone needs to uniquely identify atleast 87% of U.S. citizens in publicly available databases? <br>Data privacy is a global issue that affects billions of internet users each year. Consumers around the world are becoming increasingly worried about the protection of their online data. However, while data breaches have increased, awareness for data privacy continues to grow. Now more than ever, businesses and consumers alike are taking extra steps to safeguard their data and educate themselves on data privacy.<br>As Tim Cook said "Our own information is being weaponized against us with military efficiency. Every day, billions of dollars change hands and countless decisions are made on the basis of our likes and dislikes, our friends and families, our relationships and conversations, our wishes and fears, our hopes and dreams. These scraps of data, each one harmless enough on its own, are carefully assembled, synthesized, traded and sold."<br> What will you do to protect your data?'
                  ]}
                    typeSpeed={50}
                />
                <br/>
            </div>
        );
    }
}


// function YesPage(props) { 
// 	return (
// 		 <div>
//              <h4>RIP Your Data</h4>
//             <img 
//                 style={{"padding" : "3px", "width" : "50%"}} 
//                 src="https://media2.giphy.com/media/hJ2BmdBT1IF7q/source.gif"
//                 alt="Typing Gif"
//             />
// 		 </div>
// 	);
//   }


export default YesPage;
