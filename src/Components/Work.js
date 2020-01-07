import React, { Component } from 'react';

class Works extends Component {

    handleDelete(work){
        console.log(work)
        this.props.onDelete(work);

    }

    render(){
        // console.log('Hi2',this.props.Work)
        // let work_items;
        // if(this.props.works){
        //     work_items=this.props.works.map(work => {
        //         console.log(work);
        //         return work;
        //     })
        // }
        return (
            <div className="App">
                {this.props.Work.map(work =>{
                    return <li><strong>{work['Name Of Work']}</strong> - {work['Date']} - {work['User']}  
                    <a href="#" onClick={this.handleDelete.bind(this,work['Name Of Work'])}>Delete Now</a></li>
                })}
            </div>
        );
        }
}

export default Works;
