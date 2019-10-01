import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'

class App extends Component {

  state = {
    contacts,
    newContactList : contacts.slice(0,5)
  }

  getContactList = () => {

      let newContactList = this.state.newContactList.map((eachContact,i)=> {
        let pictureUrl = eachContact.pictureUrl
        let name = eachContact.name
        let popularity = eachContact.popularity

        return (
          <tr key={i}>
          <td><img style={{width: '100%'}} src={pictureUrl} alt={`Headshot of ${name}`} /></td>
          <td>{name}</td>
          <td>{popularity}</td>
          </tr>
        )

    })
    return newContactList
  }

  getRandomContact = () => {
    let allContacts = this.state.contacts
    let randomIndex = Math.floor(Math.random()*(allContacts.length))
    let [newContact] = allContacts.splice(randomIndex,1)
    console.log(newContact)
    
    let newContactList = [...this.state.newContactList]
    newContactList.push(newContact)
    console.log(this.state.newContactList)
    this.setState({
        newContactList
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>IronContacts</h2>
        <div className="button-wrap">
          <button onClick={this.getRandomContact}>Add Random Contact</button>
          <button>Sort by name</button>
          <button>Sort by popularity</button>
        </div>
        <div className="table-wrap"></div>
        <table>
          <thead>          
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
        <tbody>
          {this.getContactList()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
