import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        const {items,toggleCheckboxChange} = this.props;
        // console.log(items);
        return (
            <label className="mylable">
                <input type="checkbox" value= {items.value} id= {items.id}  checked={items.checked} onClick={toggleCheckboxChange} className="myCheckbox"/>
                {items.value}
                <span class="checkmark"></span>
            </label>
            
        );
    }
}

export default Checkbox;