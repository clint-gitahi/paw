import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.onSwipeLeft = this.onSwipeLeft.bind(this);
    // this.onSwipeRight = this.onSwipeRight.bind(this);
  }
  onSwipeLeft(cat) {
    console.log(cat);
  }

  onSwipeRight(cat) {
    console.log('we have swiped right', cat);
  }
  renderCards() {
    const cardStyle = {
      height: '300px'
    };
    return this.props.cats.map(cat => {
      return (
        <Card
          key={cat.id}
          onSwipeLeft={() => this.onSwipeLeft(cat)}
          onSwipeRight={() => this.onSwipeRight(cat)}
          style={cardStyle}
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
                </div>
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
