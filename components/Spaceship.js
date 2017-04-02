import React from 'react';
// import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>Name: {this.props.name}</h2>
        <h2>Speed: {this.props.speed}</h2>
        <h2>hasRockets: {this.props.hasRockets}</h2>
        <h2>colors: {this.props.colors}</h2>
      </div>
    );
  }
}

Spaceship.defaultProps = {
 	hasRockets: false,
 	colors: ['black', 'red']
 }

 module.exports = Spaceship
