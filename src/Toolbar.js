import React, { Component } from 'react';
import states from './states.json';

class Toolbar extends Component {

  constructor(props) {
    super(props);

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleStateChange(event) {
    this.props.onStateChange(event.target.value);
  }

  handleTypeChange(event) {
    this.props.onTypeChange(event.target.value);
  }

  render() {
    const statesOptions = states.map(state => {
      return <option value={state.abbreviation} key={state.abbreviation}>{state.name}</option>;
    });
    return (
      <div className="toolbar">
      Search for &nbsp;
        <select onChange={this.handleTypeChange}>
          <option value="Senators">Senators</option>
          <option value="Representatives">Representatives</option>
        </select>
        &nbsp; in &nbsp;
        <select value={this.props.state} id="state" onChange={this.handleStateChange}>
          <option disabled></option>
          {statesOptions}
        </select>
      </div>
    );
  }
}

export default Toolbar;