// Write your code here
import {Component} from 'react'

import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headsImgUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    if (tossResult === 0) {
      tossImage = headsImgUrl
      latestHeadCount += 1
    } else {
      tossImage = tailsImgUrl
      latestTailCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
