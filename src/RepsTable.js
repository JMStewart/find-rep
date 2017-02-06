import React, { Component } from 'react';

class RepsTable extends Component {

  render() {
    const repsRows = this.props.reps.map(rep => {
      return (
          <tr key={rep.name} onClick={() => this.props.onSelectRep(rep)}>
            <td>{rep.name}</td>
            <td>{rep.party}</td>
          </tr>
      );
    })
    return (
      <div className="repsTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Party</th>
            </tr>
          </thead>
          <tbody>
            {repsRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RepsTable;