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
                  <a className="card-front">
                    <div className="card-title">"Jina ya paka"</div>
                    <div className="card-subtitle">"Jina"</div>
                    <div className="card-shine"></div>
                  </a>
                </div>

                <div className="row justify-content-center" id="actionbtns">
                  <button type="button">
                    <img src="images/rewind.png" alt="rewind" />
                  </button>
                  <button
                    type="button"
                    onClick={() => console.log('disliking the image')}
                  >
                    <img src="images/dislike.png" alt="dislike" />
                  </button>
                  <button
                    type="button"
                    onClick={() => console.log('liking the image')}
                  >
                    <img src="images/like.png" alt="like" />
                  </button>
                  <button type="button">
                    <img src="images/superlike.png" alt="superlike" />
                  </button>
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
