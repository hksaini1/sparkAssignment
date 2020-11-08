import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component_button_panel">
        <div>
          <Button id='clear' name="AC" clickHandler={this.handleClick} />
          <Button id="delete" name="DELETE" clickHandler={this.handleClick} />
          <Button id='equal' name="=" clickHandler={this.handleClick} green/>
          <Button  id=" divide" name="/" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="7" name="7" clickHandler={this.handleClick} />
          <Button id="8" name="8" clickHandler={this.handleClick} />
          <Button id="9" name="9" clickHandler={this.handleClick} />
          <Button id="multiply" name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="4" name="4" clickHandler={this.handleClick} />
          <Button id="5" name="5" clickHandler={this.handleClick} />
          <Button id="6" name="6" clickHandler={this.handleClick} />
          <Button id="subtract" name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="1" name="1" clickHandler={this.handleClick} />
          <Button id="2" name="2" clickHandler={this.handleClick} />
          <Button id="3" name="3" clickHandler={this.handleClick} />
          <Button id="add" name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="0" name="0" clickHandler={this.handleClick} wide />
          <Button id="dot" name="." clickHandler={this.handleClick} />
          <Button id="percentile" name="%" clickHandler={this.handleClick} orange/>
         
        </div>
      </div>
    );
  }
}
