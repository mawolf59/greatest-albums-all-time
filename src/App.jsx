import './App.css'
import albumsArray from './albums.json'
import Album from './components/Album'

const App = () => {
  return (
    <div className="App">
      <h1>Rolling Stone: Greatest Albums of All Time</h1>
      <main>
        {albumsArray.map((album) => (
          <Album
            key={album.id}
            title={album.title}
            artist={album.artist}
            art={album.album - art}
            year={album.year}
            length={album.length}
            genres={album.genres}
            label={album.label}
          />
        ))}
      </main>
    </div>
  )
}

export default App
