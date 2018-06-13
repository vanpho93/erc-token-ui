import React, { Component } from 'react';
import { Input, Divider, Button, Card, Form, Modal, Icon, Header } from 'semantic-ui-react';

export class TransferToken extends Component {
    state = { openModel: false };

    onSubmit = event => {
        event.preventDefault();
        this.setState({ openModel: true });
    }

    render() {
        return (
                <Card fluid>
                    <Card.Content>
                        <Card.Header>Transfer infomation</Card.Header>
                        <Card.Description>
                            <Form onSubmit={this.onSubmit}>
                                <Divider />
                                <Input
                                    label="to:"
                                    placeholder="0x4357DE4549a18731fA8bF3c7b69439E87FAff8F6"
                                    fluid    
                                />
                                <Divider hidden />
                                <Input
                                    type="number"
                                    label="amount:"
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
                            <Button color='green' onClick={() => this.setState({ openModel: false })}>
                                <Icon name='checkmark' /> Got it
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Card>
        );
    }
}
