import React from "react";
import { Button, Input, Label } from 'reactstrap';
import Message from './Message';

export default class C555p4dwin extends React.Component {

    render() {
        return (
            <div>
                <Label>
                    1º Nota:<Input name="primeira" type="number" value={this.props.primeira} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                </Label>

                <Label>
                    Peso 1º Nota:<Input name="primeiraPorcentagem" type="number" value={this.props.primeiraPorcentagem} onChange={this.props.onChange} placeholder="0 %" min="0" max="100" />
                </Label>

                <Label>
                    2º Nota:<Input name="segunda" type="number" value={this.props.segunda} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                </Label>

                <Label>
                    Peso 2º Nota:<Input name="segundaPorcentagem" type="number" value={100 - this.props.primeiraPorcentagem} placeholder="0 %" min="0" max="100" disabled />
                </Label>

                <Button color="success" onClick={this.props.onClick}>Calculate!</Button>
                {
                    this.props.showResult
                        ? <Message resultado={this.props.resultado} message={this.props.message} />
                        : null
                }
            </div>
        );
    }
}