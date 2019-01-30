import React from "react";
import ReactDOM from "react-dom";
import Header from './component/Header';
import PomodoroBuild from './component/PomodoroBuild';
import './scss/app.scss';

class Main extends React.Component {
    render() {
        return (
        <div>
            <Header/>
            <PomodoroBuild/>
        </div>
        )
    }
}

let App = document.getElementById("app");
ReactDOM.render(<Main />, App);
