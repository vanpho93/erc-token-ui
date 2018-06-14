import React, { Component } from 'react';
import { Container, Input, Divider, Button, Card, Form, Modal, Icon, Header } from 'semantic-ui-react';
import { web3, tokenContract } from '../web3';

export class TransferToken extends Component {
    state = { openModel: false, currentAccount: null, to: '', amount: '', waiting: false, tokenAmount: 0 };

    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        this.setState({ currentAccount: accounts[0] }, () => {
            this.updateAmount();
        });
    }

    updateAmount = async () => {
        const tokenAmount = await tokenContract.methods.balanceOf(this.state.currentAccount).call();
        this.setState({ tokenAmount });
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({ openModel: true });
    }

    sendToken = async () => {
        try {
            this.setState({ waiting: true });
            const { currentAccount, to, amount } = this.state;
            await tokenContract.methods.transfer(to, amount).send({ from: currentAccount });
            alert('Token sent!');
        } catch (error) {
            console.log('ERROR', error);
            alert('Cannot send token');
        } finally {
            this.setState({ to: '', amount: '', waiting: false, openModel: false });
            this.updateAmount();
        }
    }

    render() {
        const { to, amount, waiting, tokenAmount } = this.state;
        return (
            <Container>
                <h3>You have {tokenAmount} PHO now</h3>
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
                                    onChange={evt => this.setState({ amount: evt.target.value })}
                                    placeholder="999999.99"
                                    fluid
                                />
                                <Divider hidden />
                                <Button type="submit" color="green" fluid>Transfer</Button>
                            </Form>
                        </Card.Description>
                    </Card.Content>
                    <Modal open={this.state.openModel}>
                        <Header icon='browser' content='Are you sure to send token?' />
                        <Modal.Content>
                            <h3>Once you click send token, it's cannot be redo, check once again before click.</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='grey' onClick={() => this.setState({ openModel: false })}>
                                <Icon name='cancel' /> Cancel
                            </Button>
                            <Button color='green' onClick={this.sendToken} loading={waiting}>
                                <Icon name='checkmark' /> Send token
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Card>
            </Container>
        );
    }
}
