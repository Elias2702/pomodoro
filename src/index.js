import React from "react";
import ReactDOM from "react-dom";
import Header from './component/Header';
import Build from './component/Build';
import './scss/app.scss';

class Main extends React.Component {
    render() {
        return (
        <div>
            <Header/>
            <Build/>
        </div>
        )
    }
}

let App = document.getElementById("app");
ReactDOM.render(<Main />, App);
