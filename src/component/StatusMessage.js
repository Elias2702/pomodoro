import React from 'react';
import Header from './Header';

class StatusMessage extends React.Component {
    render() {
        return (
            <div class="tile is-parent notification is-info box">
                <div class="tile is-child">
                    <h1>Ready to start a work session of <strong>{this.props.time}</strong>?</h1>
                </div>
            </div>
        )
    }
}

export default StatusMessage
