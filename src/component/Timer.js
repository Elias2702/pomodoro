import React from 'react';


let sec = 11;
let min = 0;
startTimer();

function startTimer() {
    sec = sec - 1;
    if (sec === -1 && min >= 1) {
        sec = 59;
        min = min - 1;
    };
    if (sec === 0 && min === 0) {
        sec = "0" + sec;
        console.log(min +':'+ sec);
        console.log('Countdown is finished');
        return;
    };
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec;
    };

    console.log(min +':'+ sec);
    setTimeout(startTimer, 1000);
}



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
