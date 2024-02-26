import './App.css'
import albumArray from './albums.json'
import Album from './components/Album'

const App = () => {
  return (
    <div className="App">
      <h1>Rolling Stone: Greatest Albums of All Time</h1>
      <main>
        <Album />
      </main>
    </div>
  )
}

export default App
