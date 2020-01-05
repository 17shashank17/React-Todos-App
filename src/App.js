import React, { Component } from 'react';
import './App.css';
import AddWorks from './Components/addwork';
import Works from './Components/Work';


class App extends Component {

  constructor(){
    super();
    this.state={
      Work:[
        {
          'Name Of Work': 'Complete React',
          'Date': '12/01/20',
          'User': 'Shashank' 
        },
        {
          'Name Of Work': 'Complete React',
          'Date': '12/01/20',
          'User': 'Aakash' 
        },
        {
          'Name Of Work': 'Complete React',
          'Date': '12/01/20',
          'User': 'Manan' 
        },
      ]
    }
  }


  handleAddNewWork(work){
    // console.log('app',work);
    // console.log(work['Name Of Work'])
    let works=this.state.Work;
    works.push(work)
    this.setState({Work:works})
    // this.state.Work.push(work)
    // console.log('Hi',this.state.Work)
    //works.push(<h6>{work['Name of work']} - {work['Date']} - {work['User']}</h6>)
  }

  render(){
    return (
      <div className="App">
        Welcome
        <AddWorks test=" Shashank" addNewWork={this.handleAddNewWork.bind(this)} />
        <Works Work={this.state.Work}/>
        
      </div>
    );
  }
}

export default App;
