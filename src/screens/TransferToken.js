import React, { Component } from 'react';
import { Container, Icon, Input, Divider, Button, Card } from 'semantic-ui-react';

export class TransferToken extends Component {
    state = {
        mnemonic: ''
    };

    onPressEnter = evt => {
        const { mnemonic } = this.state;
        if (evt.key !== 'Enter') return;
        alert(mnemonic);
    }

    render() {
        // const { mnemonic } = this.state;
        return (
            <Container style={{ marginTop: 10, width: '70%' }}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>Unlock your account</Card.Header>
                        <Divider />
                        <Card.Description>
                            <Input
                                icon={<Icon name='search' inverted circular link />}
                                placeholder='Enter your 12 mnemonic words'
                                loading={false}
                                fluid
                                onChange={evt => this.setState({ mnemonic: evt.target.value })}
                                onKeyPress={this.onPressEnter}
                            />
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>Transfer infomation</Card.Header>
                        <Card.Description>
                            <Divider />
                            <Input
                                label='to:'
                                placeholder='0x4357DE4549a18731fA8bF3c7b69439E87FAff8F6'
                                fluid    
                            />
                            <Divider hidden />
                            <Input
                                type="number"
                                label='amount:'
                                placeholder='999999.99'
                                fluid
                            />
                            <Divider hidden />
                            <Button color='green' fluid>Transfer</Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
          </Container>
        );
    }
}
