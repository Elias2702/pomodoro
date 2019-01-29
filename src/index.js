import React from "react";
import ReactDOM from "react-dom";
import Header from './component/Header';
import StatusMessage from './component/StatusMessage';
import Timer from './component/Timer';
import Controls from './component/Controls';
import Instructions from './component/Instructions';
import './scss/app.scss';

class Main extends React.Component {
    render() {
        return (  // Following a Bulma Tile template: https://bulma.io/documentation/layout/tiles/
        <div>
            <Header/>
            <div class="container">
                <div class="tile is-ancestor is-vertical is-11">
                    <StatusMessage time="30 min" />
                    <div class="tile is-parent">
                        <Timer/>
                        <Controls/>
                    </div>
                <Instructions/>
                </div>
            </div>
        </div>
        )
    }
}

let App = document.getElementById("app");
ReactDOM.render(<Main />, App);
