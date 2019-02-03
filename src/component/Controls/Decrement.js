import React from 'react';

class Decrement extends React.Component  {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      let decrement = 1;
      this.props.decrementButtonClicked(decrement);
  }

    render() {
        return (
            <div>
                <a className='button is-fullwidth is-rounded' onClick={this.handleClick}>- 1 min</a>
            </div>
        )
    }
}
export default Decrement
