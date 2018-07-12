import React from "react";

export default class MediaOptions extends React.Component {
    render() {
        return (
            <div>
                <input type="radio" value="5554dwin" checked={this.props.mediaOption === '5554dwin'} onChange={this.props.onChange} />
                <label>
                    555 4 D Win
                </label>

                <input type="radio" value="mediaSimples" checked={this.props.mediaOption === 'mediaSimples'} onChange={this.props.onChange} />
                <label>
                    Média Simples
                </label>

                <input type="radio" value="mediaPorcentagem" checked={this.props.mediaOption === 'mediaPorcentagem'} onChange={this.props.onChange} />
                <label>
                    Média com Porcentagem
                </label>
            </div>
        );
    }
}