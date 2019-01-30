import React from 'react';

class Timer extends React.Component {

    render() {
        return (
            <div class="tile is-child notification is-primary box">
                <p id="timer">
                  {this.props.time}:27
                </p>
            </div>
        )
    }
}

export default Timer
