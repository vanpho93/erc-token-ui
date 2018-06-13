import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { AccountManager } from './screens/AccountManager';

class App extends Component {
  render() {
    return (
      <Container>
        <AccountManager />
      </Container>
    );
  }
}

export default App;
