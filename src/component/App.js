import React from 'react';
import { ListItems,ListItemDisplay,NavBar } from './';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="component-container">
          <ListItems/>
          <ListItemDisplay />
        </div>
        
      </div>  
    );
  }
}

export default App;
