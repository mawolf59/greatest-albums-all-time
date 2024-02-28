import './App.css'
import data from './albums.json'
import Album from './components/Album'
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Rolling Stone: Greatest Albums of All Time</h1>
      <main>
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
          <Sidebar />
        ))}
      </main>
    </div>
  )
}

export default App
