import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

export class Avatar extends Component {
  render() {
    const { src } = this.props;

    return (
      <div className = "avatar">
        <img src = {src} />
      </div>
    );
  }

  static propTypes = {
    src: PropTypes.string,
  };
}