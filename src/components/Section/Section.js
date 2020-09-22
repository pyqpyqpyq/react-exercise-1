import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="section">
        <h3>{title}</h3>
        {children}
      </div>
    );
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };
}