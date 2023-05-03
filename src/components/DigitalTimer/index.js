// Write your code here

import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: '0', setMinutes: 25, isStarted: false}

  startTimer = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.timerId = setInterval(this.decreaseCount, 1000)
      console.log(this.timerId)

      this.setState(prevState => ({
        isStarted: !prevState.isStarted,
      }))
    } else {
      console.log(this.timerId)
      clearInterval(this.timerId)

      this.setState({
        isStarted: false,
      })
    }
  }

  decreaseCount = () => {
    const {seconds} = this.state
    if (parseInt(seconds) === 0) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        seconds: 59,
      }))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    }
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 25, seconds: '0', setMinutes: 25, isStarted: false})
  }

  increaseTimer = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        setMinutes: prevState.setMinutes + 1,
      }))
    }
  }

  decreaseTimer = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        setMinutes: prevState.setMinutes - 1,
      }))
    }
  }

  render() {
    const {minutes, seconds, setMinutes, isStarted} = this.state
    const statusImg = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altText = isStarted ? 'pause icon' : 'play icon'
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="timer-heading">Digital Timer</h1>
          <div className="bg-container2">
            <div className="timer-bg-container">
              <div className="timer-display-container">
                <h1 className="timer">
                  {minutes < 10 && '0'}
                  {minutes}:{seconds < 10 && '0'}
                  {seconds}
                </h1>
                <p className="timer-status">
                  {isStarted ? 'Running' : 'Paused'}
                </p>
              </div>
            </div>
            <div>
              <div className="play-reset-container">
                <div className="play-container">
                  <img src={statusImg} alt={altText} className="play-img" />
                  <button
                    type="button"
                    onClick={this.startTimer}
                    className="start-text"
                  >
                    {isStarted ? 'Pause' : 'Start'}
                  </button>
                </div>
                <div className="reset-container">
                  <button
                    type="button"
                    className="play-button"
                    onClick={this.onReset}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset icon"
                      className="play-img"
                    />
                  </button>
                  <p className="start-text">Reset</p>
                </div>
              </div>
              <p className="set-timer-text">Set Timer Limit</p>
              <div className="set-timer-container">
                <button type="button" onClick={this.decreaseTimer}>
                  <p className="increase-btn">-</p>
                </button>
                <div className="show-set-time">
                  <p>{setMinutes}</p>
                </div>
                <button type="button" onClick={this.increaseTimer}>
                  <p className="increase-btn">+</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
