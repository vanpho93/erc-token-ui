import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { TransferToken } from './screens/TransferToken';

class App extends Component {
  render() {
    return (
      <Container>
        <TransferToken />
      </Container>
    );
  }
}

export default App;
