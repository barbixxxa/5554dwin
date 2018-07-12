import React from "react";
import { Button, Input, Label } from 'reactstrap';
import Message from './Message';

export default class C5554dwin extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Label>
                        1º EE:<Input name="primeira" type="number" value={this.props.primeira} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                    </Label>
                    <Label>
                        2º EE:<Input name="segunda" type="number" value={this.props.segunda} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                    </Label>

                    {
                        this.props.isTerceira
                            ?
                            <Label>
                                3º EE:<Input name="terceira" type="number" value={this.props.terceira} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                            </Label>
                            : null
                    }

                    <Button color="info" onClick={this.props.add3eeField} value="valor">{this.props.text} 3º EE </Button>

                    {
                        this.props.showResult
                            ? <Message resultado={this.props.resultado} message={this.props.message} />
                            : null
                    }
                </div>
                <Button color="success" onClick={this.props.onClick}>Calculate!</Button>
            </div>
        );
    }
}