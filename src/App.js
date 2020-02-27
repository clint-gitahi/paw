import React, { Component } from 'react';
import SideBar from './containers/sidebar';
import Main from './containers/main';
import './css/App.css';

class App extends Component {
  componentDidMount() {
    console.log('it mounted');
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-3 col-lg-3 bg-light">
            <SideBar />
          </div>

          <div className="col-md-9 col-lg-9">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
