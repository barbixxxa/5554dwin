import React from "react";

export default class MediaSimples extends React.Component {

    render() {
        return (
            <div>
                <label>
                    Primeira:<input name="primeira" type="number" value={this.props.primeira} onChange={this.props.onChange} placeholder="0" min="0" max="10" />
                </label>
                <label>
                    Segunda:<input name="segunda" type="number" value={this.props.segunda} onChange={this.props.onChange} placeholder="0" min="0" max="10" />
                </label>
                <button type="button" onClick={this.props.onClick}>Click Me!</button>
                <p>Média: {this.props.resultado}</p>
            </div>
        );
    }
}