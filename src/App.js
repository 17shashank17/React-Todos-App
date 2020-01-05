import React, { Component } from 'react';
import './App.css';
import AddWorks from './Components/addwork';
import Works from './Components/Work';


class App extends Component {

  handleAddNewWork(work){
    console.log('app',work);
    return <h6>{work['Name of work']} - {work['Date']} - {work['User']}</h6>
  }

  render(){
    return (
      <div className="App">
        Welcome
        <AddWorks test=" Shashank" addNewWork={this.handleAddNewWork.bind(this)} />
        <Works testname=" Shashank" />
        
      </div>
    );
  }
}

export default App;
