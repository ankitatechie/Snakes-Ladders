import React, { PropTypes } from 'react';
import * as actionCreators from '../actions/actionCreators';
import main from '../styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
