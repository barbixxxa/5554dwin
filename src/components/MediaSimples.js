import React from "react";

export default class MediaSimples extends React.Component {

    render() {
        return (
            <div>
                <label>
                    Primeira:<input name="primeira" type="number" value={this.state.primeira} onChange={this.handleInputChange} placeholder="0" class="form-control" />
                </label>
                <label>
                    Segunda:<input name="segunda" type="number" value={this.state.segunda} onChange={this.handleInputChange} placeholder="0" class="form-control" />
                </label>
                <button type="button" onClick={this.media}>Click Me!</button>
                <p>{this.state.resultado}</p>
            </div>
        );
    }
}