import React from "react";

export default class Message extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.message}</h2>
                <h3>Sua Média é: {this.props.resultado}</h3>
            </div>
        );
    }
}