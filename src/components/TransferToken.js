import React, { Component } from 'react';
import { Input, Divider, Button, Card } from 'semantic-ui-react';

export class TransferToken extends Component {
    render() {
        return (
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
        );
    }
}
