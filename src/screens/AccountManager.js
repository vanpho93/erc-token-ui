import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { UnlockAccount, TransferToken } from '../components/components';

export class AccountManager extends Component {
    render() {
        return (
            <Container style={{ marginTop: 10, width: '70%' }}>
                <UnlockAccount />
                <TransferToken />
            </Container>
        );
    }
}
