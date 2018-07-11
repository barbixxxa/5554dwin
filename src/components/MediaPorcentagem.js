import React from "react";

export default class MediaPorcentagem extends React.Component {

    render() {
        return (
            <div>
                <label>
                    Primeira:<input name="primeira" type="number" value={this.props.primeira} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                </label>

                <label>
                    Primeira Porcentagem:<input name="primeiraPorcentagem" type="number" value={this.props.primeiraPorcentagem} onChange={this.props.onChange} placeholder="0" min="0" max="100" />
                </label>

                <label>
                    Segunda:<input name="segunda" type="number" value={this.props.segunda} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                </label>

                <label>
                    Segunda Porcentagem:<input name="segundaPorcentagem" type="number" value={100 - this.props.primeiraPorcentagem} placeholder="0" min="0" max="100" disabled />
                </label>

                <button type="button" onClick={this.props.onClick}>Click Me!</button>
                {
                    this.props.showResult ?
                        <p>Média: {this.props.resultado}</p>
                        : null
                }
            </div>
        );
    }
}