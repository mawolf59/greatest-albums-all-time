import Album from './Album'
import data from './albums.json'

const MainContent = (props) => {
  return (
    <div className="main">
      <ul>
        {data.albums.map((album) => (
          <Album
            key={album.id}
            id={album.id}
            title={album.title}
            artist={album.artist}
            year={album.year}
            art={album.album_art}
            minutes={album.length.minutes}
            seconds={album.length.seconds}
            label={album.label}
            genre={album.genres}
          />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
