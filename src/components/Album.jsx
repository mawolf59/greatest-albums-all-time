const Album = (props) => {
  return (
    <div className="album_info" id={props.id}>
      <h1 className="title">
        {props.id}. "{props.title}"
      </h1>
      <h2 className="artist">{props.artist}</h2>
      <img className="album_art" src={props.art} alt={props.title} />
      <div className="album_details">
        <h4>
          Label: {props.label}; {props.year}
        </h4>
        <h4>Genres: {props.genre}</h4>
        <h5>
          Length: {props.minutes}:{props.seconds}
        </h5>
      </div>
    </div>
  )
}

export default Album
