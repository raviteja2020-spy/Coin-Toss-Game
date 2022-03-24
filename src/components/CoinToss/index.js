import {Component} from 'react'
import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {head: 0, tail: 0, coinUrl: headsImgUrl}

  tossCoin = () => {
    const {head, tail} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let latestCoinUrl = ''
    let latestHeadCount = head
    let latestTailCount = tail
    if (tossResult === 0) {
      latestHeadCount += 1
      latestCoinUrl = headsImgUrl
    } else if (tossResult === 1) {
      latestTailCount += 1
      latestCoinUrl = tailsImgUrl
    }
    this.setState({
      head: latestHeadCount,
      tail: latestTailCount,
      coinUrl: latestCoinUrl,
    })
  }

  render() {
    const {head, tail, coinUrl} = this.state
    const total = head + tail
    return (
      <div className="main-card">
        <div className="coin-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={coinUrl} className="coin-img" alt="toss result" />
          <div>
            <button className="btn" type="button" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="coin-count-card">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{head}</p>
            <p className="count">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
