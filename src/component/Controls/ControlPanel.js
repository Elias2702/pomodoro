import React from 'react';
import ReStart from './ReStart';
import Increment from './Increment';
import Decrement from './Decrement';

class ControlPanel extends React.Component {
    render() {
        return (
            <div class="tile is-child is-3 notification is-warning box" id="controlpanel">
                <Increment/>
                <ReStart/>
                <Decrement/>
            </div>
        )
    }
}

export default ControlPanel
