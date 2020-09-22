import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';
import './Education.scss';

export class Education extends Component {
  render() {
    const { education } = this.props;
    const { year, title, description } = education;

    return (
      <div className="education">
        <span className="year">{year}</span>
        <div className="detail">
          <p className="detail-title">{title}</p>
          <p className="detail-description">{description}</p>
        </div>
      </div>
    );
  }

  static propTypes = {
    education: shape({
      year: number,
      title: string,
      description: string,
    }),
  };
}