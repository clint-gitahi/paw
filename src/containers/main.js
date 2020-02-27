import React, { Component } from 'react';

class Main extends Component {
  render() {
    const divStyle = {
      backgroundImage: 'url(https://cdn2.thecatapi.com/images/de.jpg)'
    };
    return (
      <div className="login d-flex justify-content-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <div className="wrap">
                <div className="card-shadow"></div>
                <div className="card" style={divStyle}>
                  <div className="card-front">
                    <div className="card-shine"></div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <p>first button</p>
                  <p>first button</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
