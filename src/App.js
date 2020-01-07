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
          'Name Of Work': 'Complete React-Native',
          'Date': '12/01/20',
          'User': 'Aakash' 
        },
        {
          'Name Of Work': 'Complete Hackverse',
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

  deleteWork(work){
    console.log(work)
    console.log('delete clicked')
    let works=this.state.Work;
    let newWork=works.map(work_to_be_deleted => {
      if(work_to_be_deleted['Name Of Work'] !== work)
        return work_to_be_deleted
      else
        return {'Name Of Work': 'Deleted','Date':'X','User':'X'}
    })
    console.log(newWork);
    this.setState({Work:newWork});
    console.log(this.state.Work)
  }

  render(){
    return (
      <div className="App">
        Welcome
        <AddWorks test=" Shashank" addNewWork={this.handleAddNewWork.bind(this)} />
        <Works onDelete={this.deleteWork.bind(this)} Work={this.state.Work}/>
        
      </div>
    );
  }
}

export default App;
