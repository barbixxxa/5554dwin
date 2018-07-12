import React from "react";
import { Input, Label, FormGroup } from 'reactstrap';

export default class MediaOptions extends React.Component {
    render() {
        return (
            <div>
                <FormGroup check>
                    <Input type="radio" value="5554dwin" checked={this.props.mediaOption === '5554dwin'} onChange={this.props.onChange} />
                    <Label check>
                        555 for the Win
                </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="radio" value="555%4dwin" checked={this.props.mediaOption === '555%4dwin'} onChange={this.props.onChange} />
                    <Label check>
                        555 with % for the Win
                </Label>
                </FormGroup>
            </div>
        );
    }
}