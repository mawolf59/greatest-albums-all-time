const Artwork = (props) => {
  return (
    <div className="album_art">
      <img src={props.album_art} alt={props.title} />
    </div>
  )
}

export default Artwork
