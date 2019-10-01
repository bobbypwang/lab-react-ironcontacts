import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'

function compareNames (a,b) {
  if ( a.name < b.name ) {
    return -1;
  }
  if (a.name > b.name ) {
    return 1;
  }
  return 0;
}

function comparePopularity (a,b) {
  if ( a.popularity < b.popularity ) {
    return 1;
  }
  if (a.popularity > b.popularity) {
    return -1;
  }
  return 0;
}
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
          <td><button>Delete</button></td>
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

  sortByName = () => {
    this.setState({
      newContactList : [...this.state.newContactList].sort(compareNames)
    })
  };

  sortByPopularity = () => {
    this.setState({
      newContactList : [...this.state.newContactList].sort(comparePopularity)
    })
  };

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
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <div className="table-wrap"></div>
        <table>
          <thead>          
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
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
