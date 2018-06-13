import React, { Component } from 'react';
import { Container, Input, Divider, Button, Card, Form, Modal, Icon, Header } from 'semantic-ui-react';
import { web3 } from '../web3';

export class TransferToken extends Component {
    state = { openModel: false, currentAccount: null, to: '', amount: null };

    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        this.setState({ currentAccount: accounts[0] });
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({ openModel: true });
    }

    sendToken() {

    }

    render() {
        const { to, amount } = this.state;
        return (
            <Container>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>Transfer token</Card.Header>
                        <Card.Description>
                            <h4>Current account: {this.state.currentAccount}</h4>
                            <Form onSubmit={this.onSubmit}>
                                <Divider />
                                <Input
                                    label="to:"
                                    value={to}
                                    onChange={evt => this.setState({ to: evt.target.value })}
                                    placeholder="0x4357DE4549a18731fA8bF3c7b69439E87FAff8F6"
                                    fluid
                                />
                                <Divider hidden />
                                <Input
                                    type="number"
                                    label="amount:"
                                    value={amount}
                                    onChange={evt => this.setState({ to: evt.target.value })}
                                    placeholder="999999.99"
                                    fluid
                                />
                                <Divider hidden />
                                <Button type="submit" color="green" fluid>Transfer</Button>
                            </Form>
                        </Card.Description>
                    </Card.Content>
                    <Modal open={this.state.openModel}>
                        <Header icon='browser' content='Cookies policy' />
                        <Modal.Content>
                            <h3>This website uses cookies to ensure the best user experience.</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' onClick={() => this.setState({ openModel: false })} loading>
                                <Icon name='checkmark' /> Send token
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Card>
            </Container>
        );
    }
}
