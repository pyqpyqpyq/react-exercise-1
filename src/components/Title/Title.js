import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

export class Title extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className="title">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    );
  }

   static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };
}