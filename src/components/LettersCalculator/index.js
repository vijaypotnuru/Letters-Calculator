import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    lettersLength: '',
  }

  onLength = event => {
    this.setState({
      lettersLength: event.target.value,
    })
  }

  render() {
    const {lettersLength} = this.state
    return (
      <div className="app-container">
        <div className="letter-calculator-container">
          <div className="calculator-container">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="input" className="note">
                Enter the phrase
              </label>
              <input
                id="input"
                className="input"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onLength}
              />
            </div>

            <p className="counter">No.of letters: {lettersLength.length}</p>
          </div>
          <img
            className="calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
