import React from "react";

export default class MediaOptions extends React.Component {
    render() {
        return (
            <div>
                <input type="radio" value="5554dwin" checked={this.props.mediaOption === '5554dwin'} onChange={this.props.onChange} />
                <label>
                    555 for the Win
                </label>

                <input type="radio" value="555%4dwin" checked={this.props.mediaOption === '555%4dwin'} onChange={this.props.onChange} />
                <label>
                    555 with % for the Win
                </label>
            </div>
        );
    }
}