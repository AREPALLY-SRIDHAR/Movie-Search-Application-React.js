// Write your code here
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, name, year} = movieDetails

  return (
    <li className="card">
      <img src={thumbnailUrl} alt={name} />

      <p>
        {name}
        <span className="para"> {year}</span>
      </p>
    </li>
  )
}

export default MovieItem
