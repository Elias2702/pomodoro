import React from 'react';

class ReStart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timerStarted: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      let timerStarted;
        if (this.state.timerStarted) {
          this.setState({
              timerStarted: false
          });
          timerStarted = false;
        } else {
          this.setState({
              timerStarted: true
          });
          timerStarted = true;
        }
        this.props.startButtonClicked(timerStarted);
    }

    render() {
        return (
            <div>
                <a className='button is-fullwidth is-rounded' onClick={this.handleClick}>{this.state.timerStarted ? 'Restart' : 'Start'}</a>
            </div>
        )
    }
}

export default ReStart
