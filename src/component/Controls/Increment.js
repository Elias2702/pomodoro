import React from 'react';

class Increment extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      let increment = 1;
      this.props.incrementButtonClicked(increment);
  }

    render() {
        return (
            <div>
                <a className='button is-fullwidth is-rounded' onClick={this.handleClick}>+ 1 min</a>
            </div>
        )
    }
}

export default Increment
