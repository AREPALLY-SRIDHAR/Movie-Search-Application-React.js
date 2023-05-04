import {Component} from 'react'

import MovieItem from '../MovieItem'

import './index.css'

class PrimeVideo extends Component {
  state = {searchtext: ''}

  text = event => {
    this.setState({searchtext: event.target.value})
  }

  render() {
    const {searchtext} = this.state
    const {moviesList} = this.props
    const update = moviesList.filter(each =>
      each.name.toLowerCase().includes(searchtext.toLowerCase()),
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="video"
          className="bg-image"
        />

        <input type="search" onChange={this.text} />
        <div>
          <ul className="container">
            {update.map(each => (
              <MovieItem movieDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
