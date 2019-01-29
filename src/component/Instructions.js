import React from 'react';

class Instructions extends React.Component {
    render() {
        return (
            <div class="tile is-parent">
                <article class="tile is-child is-5 notification box">
                    <p class="title">How to?</p>
                    <ul class="content">
                      <li>Decide on the task to be done.</li>
                      <li>Set the pomodoro timer (traditionally to 25 minutes).</li>
                      <li>Work on the task.</li>
                      <li>End work when the timer rings and put a checkmark on a piece of paper.</li>
                      <li>If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 2.</li>
                      <li>After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.</li>
                    </ul>
                </article>
                <article class="tile is-child is-7 notification is-success box">
                    <p class="title">Pomodoro?</p>
                    <p class="subtitle"> From Wikipedia.</p>
                    <p class="content">The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for a tomato, after the tomato-shaped kitchen timer that Cirillo used as a university student. The technique has been widely popularized by dozens of apps and websites providing timers and instructions. Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts.
                    </p>
                </article>
            </div>
        )
    }
}

export default Instructions
