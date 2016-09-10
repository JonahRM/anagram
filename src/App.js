import React, { Component } from 'react';
import { Grid, Row, Navbar} from 'react-bootstrap';
import InputForm from './InputForm.js'

class App extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Navbar fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Anagram Check</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Grid>   
        </Navbar> 
          <Row>
            <InputForm></InputForm>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;