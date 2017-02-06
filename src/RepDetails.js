import React, { Component } from 'react';

class RepsDetails extends Component {

  render() {
    const rep = this.props.selectedRep;
    if (!rep) {
      return null;
    }
    const nameArr = rep.name.split(' ');
    const firstName = nameArr.shift();
    const lastName = nameArr.join(' ');
    return (
      <div className="repsDetails">
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{rep.district}</div>
        <div>{rep.phone}</div>
        <div>{rep.office}</div>
        <div><a href={rep.link} target="_blank">View Website</a></div>
      </div>
    );
  }
}

export default RepsDetails;