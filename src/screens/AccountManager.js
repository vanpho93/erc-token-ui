import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { TransferToken, CheckBalance } from '../components/components';

export class AccountManager extends Component {
    render() {
        return (
            <Container style={{ marginTop: 10, width: '70%' }}>
                {/* <UnlockAccount /> */}
                <TransferToken />
                <Divider hidden />
                <CheckBalance />
            </Container>
        );
    }
}
