import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Dislikes from './Dislikes';
import Likes from './Likes';
import Main from './main';
import api from '../utils/api';
import key from '../utils/key.js';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }
  async componentDidMount() {
    const response = await api.get(
      `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=true&page=0&order=Desc&mime_types=jpg`,
      {
        headers: { 'x-api-key': key.apiKey }
      }
    );

    this.setState({ list: response.data });
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

              <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={k => this.setState({ key: k })}
              >
                <Tab eventKey="likes" title="Likes">
                  <Likes />
                </Tab>
                <Tab eventKey="dislikes" title="Dislikes">
                  <Dislikes />
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="col-md-9 col-lg-9 bg-light">
            <Main cats={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
