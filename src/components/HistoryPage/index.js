import {useState} from 'react'
import HistoryItem from '../HistoryItem'

import './index.css'

const HistoryPage = props => {
  const {initialHistoryList} = props
  const [searchInput, setSearchInput] = useState('')
  const [initialHistory, setSearchHistory] = useState(initialHistoryList)

  const onChangeSearch = event => {
    setSearchInput(event.target.value)
  }

  const onDelete = id => {
    const filterHistory = initialHistory.filter(each => each.id !== id)
    setSearchHistory(filterHistory)
  }

  const searchList = initialHistory.filter(each =>
    each.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  const searchListLength = searchList.length
  return (
    <div className="container">
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="history-logo"
        />
        <div className="search-container">
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
          </div>
          <input
            type="search"
            className="input"
            placeholder="Search history"
            onChange={onChangeSearch}
          />
        </div>
      </nav>
      <div className="sub-container">
        {searchListLength > 0 ? (
          <ul className="un-li-container">
            {searchList.map(each => (
              <HistoryItem key={each.id} data={each} onDelete={onDelete} />
            ))}
          </ul>
        ) : (
          <p className="no-history">There is no history to show</p>
        )}
      </div>
    </div>
  )
}
export default HistoryPage
