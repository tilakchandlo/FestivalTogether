import React, { Component } from 'react'

class ScheduleSetItem extends Component {
  constructor(props) {
    super(props);
    const going = this.props.set.going.find(user => user._id === this.props.currentUser.id) ? true : false;
    
    this.state = { going };

    this.toggleGoing = this.toggleGoing.bind(this);
  }

  toggleGoing() {
    if (this.state.going) {
      this.props.removeUserFromSet(this.props.festivalId, this.props.set._id)
        .then(() => this.setState({ going: false }));
    } else {
      this.props.addUserToSet(this.props.festivalId, this.props.set._id)
        .then(() => this.setState({ going: true }));
    }
  }
  
  render() {
    const { set, style, startTime, endTime } = this.props;
    const setStyle = Object.assign({}, style);
    let backgroundColor = this.state.going ? '#28de28' : 'white';

    if (this.state.boxHover) {
      setStyle.backgroundColor = '#ccc';
    }
    if (this.state.buttonHover) {
      if (!this.state.going) backgroundColor = '#ccc';
      setStyle.backgroundColor = style.backgroundColor;
    }
    
    return (
      <div className="schedule-set-item" 
        style={setStyle} 
        onMouseOver={() => this.setState({ boxHover: true })}
        onMouseLeave={() => this.setState({ boxHover: false })}
      >
        <h3>{set.artist}</h3>
        <p>{startTime} - {endTime}</p>
        <button 
          style={{ backgroundColor }} 
          onClick={this.toggleGoing}
          onMouseEnter={() => this.setState({ buttonHover: true })}
          onMouseLeave={() => this.setState({ buttonHover: false })}
        />
      </div>
    )
  }
}

export default ScheduleSetItem;