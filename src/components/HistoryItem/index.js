import './index.css'

const HistoryItem = props => {
  const {data, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = data
  const onDltBtn = () => {
    onDelete(id)
  }
  return (
    <li className="list-container">
      <div className="on-container">
        <div className="time-container">
          <p className="time-acc">{timeAccessed}</p>
        </div>
        <div className="domain-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domain-ulr">{domainUrl}</p>
        </div>
      </div>
      <div className="dlt-btn">
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onDltBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="dlt-btn"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
