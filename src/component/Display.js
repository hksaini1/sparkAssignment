import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div> <div className="Heading_style" >Simple Calculator</div>
      <div className="component_display">
     
        <div>{this.props.value}</div>
      </div>
      </div>
    );
  }
}
