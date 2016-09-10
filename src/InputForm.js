import React, { Component } from 'react';
import { form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';


function areAnagrams(a,b) {
  a = a.toLowerCase().replace(/ /g,'');
  b = b.toLowerCase().replace(/ /g,'');

  var counts = {};
  for (var i = 0; i < a.length; i++) {
    if (!(a[i] in counts))
      counts[a[i]] = 1;
    else
      counts[a[i]]++;
  }
  for (i = 0; i < b.length; i++) {
    counts[b[i]]--;
  }
  for (var char in counts) {
    if (counts[char] !== 0)
      return false;
  }
  return true;
}

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {topVal: '', bottomVal : ''}
    this.submit = this.submit.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  getMessage(e) {
    if (this.state.topVal.length === 0 || this.state.bottomVal.length === 0)
      return "Input 2 strings to see if they are anagrams!";
    else if (areAnagrams(this.state.topVal,this.state.bottomVal))
      return "It is an anagram!";
    else 
      return "It is not an anagram!";
  }

  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  submit(e) {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel className="text-primary">String 1</ControlLabel>
            <FormControl 
              type="text" 
              value={this.state.topVal}
              name="topVal"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel className="text-primary">String 2</ControlLabel>
            <FormControl 
              type="text" 
              value={this.state.bottomVal}
              name="bottomVal"
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
          <h1 className="info text-primary">{this.getMessage()}</h1>
      </div>
    );
  }
}
export default InputForm;