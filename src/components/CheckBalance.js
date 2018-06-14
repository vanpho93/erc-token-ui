import React, { Component } from 'react';
import { Container, Input, Divider, Card } from 'semantic-ui-react';
import { web3, tokenContract } from '../web3';

export class CheckBalance extends Component {
    state = { account: '' };

    onPressEnter = async evt => {
        const { account } = this.state;
        if (evt.key !== 'Enter') return;
        const tokenAmount = await tokenContract.methods.balanceOf(account).call();
        alert(tokenAmount);
    }

    render() {
        const { account } = this.state;
        return (
            <Container>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>Check balance</Card.Header>
                        <Card.Description>
                            <Divider />
                            <Input
                                label="account:"
                                value={account}
                                onChange={evt => this.setState({ account: evt.target.value })}
                                placeholder="0x4357DE4549a18731fA8bF3c7b69439E87FAff8F6"
                                onKeyPress={this.onPressEnter}
                                fluid
                            />
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Container>
        );
    }
}
