const SideBar = (props) => {
  return (
    <div className="side-bar">
      <div className="side-info">
        <ul>
          {props.id}. {props.title}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
