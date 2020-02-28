import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
  }
  onSwipeLeft() {
    console.log('we hve just swiped left');
  }

  onSwipeRight() {
    console.log('we have swiped right');
  }
  renderCards() {
    return this.props.cats.map(cat => {
      return (
        <Card
          key={cat.id}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
        >
          <Link to={`/moreinfo/${cat.id}`}>
            <div className="justify-content-center">
              <div
                className="card"
                style={{ backgroundImage: `url(${cat.url})` }}
              >
                <div className="card-front">
                  <div className="card-title">
                    {cat.breeds[0] ? cat.breeds[0].name : ''}
                  </div>
                  <div className="card-subtitle">
                    {cat.breeds[0] ? cat.breeds[0].origin : ''}
                  </div>
                  <div className="card-shine"></div>
                </div>
              </div>

              <div className="row justify-content-center" id="actionbtns">
                <button type="button">
                  <img src="images/rewind.png" alt="rewind" />
                </button>
                <button
                  type="button"
                  onClick={() => console.log('handle click left')}
                >
                  <img src="images/dislike.png" alt="dislike" />
                </button>
                <button
                  type="button"
                  onClick={() => console.log('handle click right')}
                >
                  <img src="images/like.png" alt="like" />
                </button>
                <button type="button">
                  <img src="images/superlike.png" alt="superlike" />
                </button>
              </div>
            </div>
          </Link>
        </Card>
      );
    });
  }
  render() {
    return (
      <>
        <CardWrapper>{this.renderCards()}</CardWrapper>
      </>
    );
  }
}

export default Main;
/*
<div className="justify-content-center">
            <div
              className="card"
              style={{ backgroundImage: `url(${cat.url})` }}
            >
              <a className="card-front">
                <div className="card-title">"Jina ya paka"</div>
                <div className="card-subtitle">"Jina"</div>
                <div className="card-shine"></div>
              </a>
            </div>
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
*/
