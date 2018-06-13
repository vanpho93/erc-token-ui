import React, { Component } from 'react';
import { Icon, Input, Divider, Card } from 'semantic-ui-react';

export class UnlockAccount extends Component {
    state = { mnemonic: '' };

    onPressEnter = evt => {
        const { mnemonic } = this.state;
        if (evt.key !== 'Enter') return;
        alert(mnemonic);
    }

    render() {
        return (
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
        );
    }
}
