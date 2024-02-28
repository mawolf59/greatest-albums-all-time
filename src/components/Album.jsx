const Album = (props) => {
  return (
    <div className="album_info">
      <h1 className="title">
        {props.id}. "{props.title}"
      </h1>
      <h2>{props.artist}</h2>
      <h3>
        {props.year}, {props.label}, {props.genre}
      </h3>
      <h5>
        Album Length: {props.minutes}: {props.seconds}
      </h5>
    </div>
  )
}

export default Album
