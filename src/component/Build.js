import React from "react";
import StatusMessage from './StatusMessage';
import Timer from './Timer';
import ControlPanel from './Controls/ControlPanel';
import Instructions from './Instructions';


class Build extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStarted : false,
            time : 1
        }
        this.startButtonClicked = this.startButtonClicked.bind(this);
        this.incrementButtonClicked = this.incrementButtonClicked.bind(this);
        this.decrementButtonClicked = this.decrementButtonClicked.bind(this);
    }

    startButtonClicked(timerStarted) {
        this.setState({timerStarted: timerStarted});
    }

    incrementButtonClicked(increment) {
        let incrementedtime = this.state.time + 1;
        this.setState({time: incrementedtime});
    }

    decrementButtonClicked(decrement) {
        let decrementedtime = this.state.time - 1;
        this.setState({time: decrementedtime});
    }

    render() {
        return (  // Following a Bulma Tile template: https://bulma.io/documentation/layout/tiles/
            <div className="container">
                <div className="tile is-ancestor is-vertical is-11">
                    <StatusMessage time={this.state.time} />
                    <div className="tile is-parent">
                        <Timer time={this.state.time} timerStarted={this.state.timerStarted} />
                        <ControlPanel
                        startButtonClicked={this.startButtonClicked}
                        incrementButtonClicked={this.incrementButtonClicked}
                        decrementButtonClicked={this.decrementButtonClicked}
                        />
                    </div>
                <Instructions/>
                </div>
            </div>
        )
    }
}

export default Build
