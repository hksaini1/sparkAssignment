import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from './index';
import { changeDsCheckbox,changeDbCheckbox,changeWebCheckbox } from '../actions';

class listItems extends Component {
    constructor(props){
        super(props)
    }
    
    toggleCheckboxChange = (e) => {
        // console.log(e.target.id);
        const type = e.target.id;
        const value = e.target.value;
        if(type === '0'){
            this.props.dispatch(changeDsCheckbox(value));
        }else if(type === '1'){
            this.props.dispatch(changeWebCheckbox(value));
        }else{
            this.props.dispatch(changeDbCheckbox(value));
        }
    }
    
    render() {
        const {ds,web,db} = this.props;
        console.log('Render');
        return (
            <div className="container">
                <h2 className="mylable">Data Structure</h2>
                {
                    ds.ds.map((data,key) => (
                        <Checkbox items={data} key={key} toggleCheckboxChange={this.toggleCheckboxChange}/>
                    )) 
                }
                <h2 className="mylable">Web</h2>
                {
                    web.web.map((data,key) => (
                        <Checkbox items={data} key={key} toggleCheckboxChange={this.toggleCheckboxChange} />
                    )) 
                }
                
                <h2 className="mylable">DataBase</h2>
                {
                    db.db.map((data,key) => (
                        <Checkbox items={data} key={key} toggleCheckboxChange={this.toggleCheckboxChange} />
                    )) 
                }
            </div>
        );
    }
}

function  mapStoreToProps(state){
    return {
        ds:state.ds,
        web:state.web,
        db:state.db
    }
}
export default connect(mapStoreToProps)(listItems);