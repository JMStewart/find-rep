import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import RepsTable from './RepsTable';
import RepDetails from './RepDetails';
import getData from './getData';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Senators',
      state: '',
      results: [],
      selectedRep: null
    };
  }

  onTypeChange(type) {
    this.setState({type}, this.getReps);
  }

  onStateChange(state) {
    this.setState({state}, this.getReps);
  }

  getReps() {
    let dataPromise;
    if (this.state.type === 'Senators') {
      dataPromise = getData.senators(this.state.state);
    } else {
      dataPromise = getData.representatives(this.state.state);
    }
    dataPromise.then(data => {
        this.setState({results: data, selectedRep: null});
      });
  }

  onSelectRep(rep) {
    this.setState({selectedRep: rep});
  }

  render() {
    return (
      <div className="App">
        <h1 className="blue">Who's My Representative?</h1>
        <Toolbar
          onTypeChange={(type) => this.onTypeChange(type)}
          onStateChange={(state) => this.onStateChange(state)}
          state={this.state.state}
        ></Toolbar>
        <div className="results">
          <div className="repsTableDiv">
            <h2>List / <span className="blue">{this.state.type}</span></h2>
            <RepsTable
              reps={this.state.results}
              onSelectRep={(rep) => this.onSelectRep(rep)}
            ></RepsTable>
          </div>
          <div className="repsDetailsDiv">
            <h2>Info</h2>
            <RepDetails selectedRep={this.state.selectedRep}></RepDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
