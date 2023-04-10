// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onApplyBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p className="sub">Min Limit 0mph,Max Limit 200mph</p>
        <div>
          <button type="button" onClick={this.onAccelerate} className="button1">
            Accelerate
          </button>
          <button type="button" onClick={this.onApplyBreak} className="button2">
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
