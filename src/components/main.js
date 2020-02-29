import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: [],
      disliked: []
    };
  }
  onSwipeLeft(cat) {
    const dislikedObj = {
      id: cat.id,
      url: cat.url
    };

    this.setState({
      disliked: [...this.state.disliked, dislikedObj]
    });

    const json = JSON.stringify(this.state.disliked);
    localStorage.setItem('disliked', json);
  }

  onSwipeRight(cat) {
    const likedObj = {
      id: cat.id,
      url: cat.url
    };

    this.setState({
      liked: [...this.state.liked, likedObj]
    });

    const json = JSON.stringify(this.state.liked);
    localStorage.setItem('liked', json);
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
    console.log('STATE', this.state);
    return (
      <>
        <CardWrapper>{this.renderCards()}</CardWrapper>
      </>
    );
  }
}

export default Main;
