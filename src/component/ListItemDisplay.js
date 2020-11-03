import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDsCheckbox,changeDbCheckbox,changeWebCheckbox } from '../actions';

class ListItemDisplay extends Component {
    toggleDsCheckbox = (e) => {
        // console.log("target",e.target);
        const value = e.target.id;
        this.props.dispatch(changeDsCheckbox(value));
    }
    toggleDbCheckbox = (e) => {
        // console.log("target",e.target);
        const value = e.target.id;
        this.props.dispatch(changeDbCheckbox(value));
    }
    toggleWebCheckbox = (e) => {
        // console.log("target",e.target);
        const value = e.target.id;
        this.props.dispatch(changeWebCheckbox(value));
    }
    render() {
        // console.log("display",this.props.ds.dsDisplay);
        const dsDisplay = this.props.ds.dsDisplay;
        const dbDisplay = this.props.db.dbDisplay;
        const webDisplay = this.props.web.webDisplay;
        return (
            <div className="mycontainer">
                {dsDisplay.length == 0 && dbDisplay.length ==0 && webDisplay.length == 0 && <div className="display-nodata">No Value Selected</div>}
                <div className="display-container">
                    {dsDisplay.length > 0 && (
                        <ul>
                            <span className="item-heading">Portugal</span>
                            {
                                dsDisplay.map((data) => (
                                    <li className="display-item">
                                        <span className="name">{data}</span>
                                        <i className="fa fa-times icon" aria-hidden="true" id={data} onClick={this.toggleDsCheckbox}></i>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
                <div className="display-container">
                    {webDisplay.length > 0 && (
                        <ul>
                            <span className="item-heading">Nicaragua</span>
                            {
                                webDisplay.map((data) => (
                                    <li className="display-item">
                                        <span className="name">{data}</span>
                                        <i className="fa fa-times icon" aria-hidden="true" id={data} onClick={this.toggleWebCheckbox}></i>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
                <div className="display-container">
                    {dbDisplay.length > 0 && (
                        <ul>
                            <span className="item-heading">Marshall Islands</span>
                            {
                                dbDisplay.map((data) => (
                                    <li className="display-item">
                                        <span className="name">{data}</span>
                                        <i className="fa fa-times icon" aria-hidden="true" id={data} onClick={this.toggleDbCheckbox}></i>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
               

                
            </div>
        );
    }
}

function  mapStoreToProps(state){
    return {
        ds:state.ds,
        db:state.db,
        web:state.web
    }
}
export default connect(mapStoreToProps)(ListItemDisplay);