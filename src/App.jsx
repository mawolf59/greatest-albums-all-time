import './App.css'
import data from './albums.json'
import Album from './components/Album'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="album-info">
        {data.albums.map((album) => (
          <Album
            key={album.id}
            title={album.title}
            artist={album.artist}
            year={album.year}
            art={album.album_art}
            minutes={album.length.minutes}
            seconds={album.length.seconds}
            label={album.label}
          />
        ))}
      </main>
    </div>
  )
}

export default App
