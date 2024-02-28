import './App.css'
import data from './albums.json'
import Album from './components/Album'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  )
}

export default App
