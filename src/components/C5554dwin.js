import React from "react";

export default class C5554dwin extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <label>
                        1º EE:<input name="primeira" type="number" value={this.props.primeira} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                    </label>
                    <label>
                        2º EE:<input name="segunda" type="number" value={this.props.segunda} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                    </label>

                    {
                        this.props.isTerceira
                            ? <div>
                                <label>
                                    3º EE:<input name="terceira" type="number" value={this.props.terceira} onChange={this.props.onChange} placeholder="0.0" min="0.0" max="10.0" step="0.1" />
                                </label>
                            </div>
                            : null
                    }

                    <button type="button" onClick={this.props.add3eeField} value="valor">Add 3º EE </button>

                    {
                        this.props.showResult
                            ? <div>
                                <p>Média: {this.props.resultado}</p>
                                <p>{this.props.message}</p>
                            </div>
                            :
                            null
                    }
                </div>
                <button type="button" onClick={this.props.onClick}>Click Me!</button>
            </div>
        );
    }
}