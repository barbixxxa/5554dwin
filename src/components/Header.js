import React from "react";
import logo from '../logo.svg';

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to 555Calculator</h1>
                </header>
            </div>
        );
    }
}