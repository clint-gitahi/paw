import React, { Component } from 'react';
import Likes from './components/Likes';
import Dislikes from './components/Dislikes';
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
          <div className="d-none d-md-flex col-md-3 col-lg-3 ">
            <div>
              <div className="header">
                <h2>Cat Tinder</h2>
              </div>

              <div className="topnav">
                <a class="active" href="#home">
                  <p>Likes</p>
                </a>
                <a href="#news">
                  <p>Dislikes</p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-lg-9 bg-light">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
