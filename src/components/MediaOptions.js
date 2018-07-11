import React from "react";

export default class MediaOptions extends React.Component {
    render() {
        return (
            <div>
                <input type="radio" name="media" id="mediaSimples" value="mediaSimples" checked={this.props.checked} onChange={this.props.onChange} />
                <label>
                    Média Simples
                </label>

                <input type="radio" name="media" id="mediaPorcentagem" value="mediaPorcentagem" checked={!this.props.checked} onChange={this.props.onChange} />
                <label>
                    Média com Porcentagem
                </label>
            </div>
        );
    }
}