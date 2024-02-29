const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="side-info">
        <ul>
          {props.data.albums.map((album) => (
            <li key={album.id}>
              <a href={`#${album.id}`}>
                {album.id}
                {')'} {album.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
