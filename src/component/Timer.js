import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sec: 0,
            min: this.props.time,
            timerStarted: this.props.timerStarted
        };
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        if (this.state.timerStarted) {
            this.countDown();
        } else {
            this.setState({
                sec: "00",
            });
            console.log('Timer not started')
        }
    }
    // Making sure props change coming from Build.js trigger a change into Timer.js local state and re renders properly
    componentWillReceiveProps(nextProps){
            if(nextProps.time !== this.props.time) {
                this.setState({min:nextProps.time});
            }
            if(nextProps.timerStarted !== this.props.timerStarted){
                this.setState({timerStarted:nextProps.timerStarted});
                if (nextProps.timerStarted) {
                    this.countDown()
                } else {
                  this.setState({
                      sec: "00",
                      min: 0,
                  });
                }
            };
    }

    countDown() {

        let sec = this.state.sec;
        let min = this.state.min;

        sec = sec - 1;
        if (sec === -1 && min >= 1) {
            sec = 59;
            min = min - 1;
        };
        if (sec === -1 && min === 0) {
            sec = "00";
            this.setState({
                min: this.props.time,
                sec: sec,
                timerStarted: false
            });
            return;
        };

        if (sec < 10 && sec >= 0) {
            sec = "0" + sec;
        };

        this.setState({
            min: min,
            sec: sec,
        });

        const ticker = setTimeout(this.countDown, 1000);

    }

    render() {
        return (
            <div className="tile is-child notification is-primary box">
                <p id="timer">
                  {this.state.min}:{this.state.sec}
                </p>
            </div>
        )
    }
}

export default Timer
