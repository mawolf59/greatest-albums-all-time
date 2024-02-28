const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="listings">
        <li>
          {props.album.id}". "{props.album.title}
        </li>
      </div>
    </div>
  )
}

export default SideBar
