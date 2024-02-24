const Album = (props) => {
  return (
    <div>
      <img src={props.art} alt={props.title} />
      <h1>{props.title}</h1>
      <h3>{props.artist}</h3>
      <h5>{props.year}</h5>
      <h5>{props.length}</h5>
      <h5>{props.label}</h5>
      {props.genres.map((genre) => (
        <Genre key={genre.genreArray} />
      ))}
    </div>
  )
}

export default Movie
