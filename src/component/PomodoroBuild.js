import React from "react";
import StatusMessage from './StatusMessage';
import Timer from './Timer';
import ControlPanel from './Controls/ControlPanel';
import Instructions from './Instructions';

let time = 23;

class PomodoroBuild extends React.Component {

    render() {
        return (  // Following a Bulma Tile template: https://bulma.io/documentation/layout/tiles/
            <div class="container">
                <div class="tile is-ancestor is-vertical is-11">
                    <StatusMessage time={time} />
                    <div class="tile is-parent">
                        <Timer time={time }/>
                        <ControlPanel/>
                    </div>
                <Instructions/>
                </div>
            </div>
        )
    }
}

export default PomodoroBuild
