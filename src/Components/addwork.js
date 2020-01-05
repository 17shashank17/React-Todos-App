import React, { Component } from 'react';

class AddWorks extends Component {
    static defaultProps={
        workers: ['Shashank','Aakash','Manan']
    }
    constructor(){
        super();
        this.state={
            newWork:{}
        }
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log('form submitted');
        // console.log(this.refs.work.value)
        this.setState({
            newWork:{
                'Name Of Work':this.refs.work.value,
                'Date': this.refs.date.value,
                'User': this.refs.user.value
            }
        },()=>{
            // console.log(this.state);
            this.props.addNewWork(this.state.newWork);
        });
    }

    render(){
        let options=this.props.workers.map(worker => {
            return <option key={worker} value={worker}>{worker}</option>
        });
        return (
            <div>
                <h2>Add Your Work Here!</h2>
                <br />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="work" placeholder="Name of Work" />
                    <br />
                    <input type="text" ref="date" placeholder="Date DD/MM/YY" />
                    <br />
                    Select Worker: <select ref="user">
                        {options}
                    </select>
                    <br />
                    <input type="submit" value="Add ToDo" />
                    
                </form>
                <br />
            </div>
        );
    }
}

export default AddWorks;