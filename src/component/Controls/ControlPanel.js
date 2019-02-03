import React from 'react';
import ReStart from './ReStart';
import Increment from './Increment';
import Decrement from './Decrement';

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          timerStarted: false
        }
        this.startButtonClicked = this.startButtonClicked.bind(this);
        this.incrementButtonClicked = this.incrementButtonClicked.bind(this);
        this.decrementButtonClicked = this.decrementButtonClicked.bind(this);
    }

    startButtonClicked(timerStarted) {
        this.setState({timerStarted: timerStarted});
        this.props.startButtonClicked(timerStarted);
    }

    incrementButtonClicked(increment) {
        this.props.incrementButtonClicked(increment);
    }

    decrementButtonClicked(decrement) {
        this.props.decrementButtonClicked(decrement);
    }

    render() {
        return (
            <div className="tile is-child is-3 notification is-warning box" id="controlpanel">
                <Increment incrementButtonClicked={this.incrementButtonClicked}/>
                <ReStart startButtonClicked={this.startButtonClicked}/>
                <Decrement decrementButtonClicked={this.decrementButtonClicked}/>
            </div>
        )
    }
}

export default ControlPanel
