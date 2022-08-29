// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, clickTabItem, isActive} = props

  const {displayText, tabId} = eachTabDetails

  const activeTabClassName = isActive ? 'active-tab' : ''

  const onClickedTabSection = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-container">
      <button
        type="button"
        className={`tab-name ${activeTabClassName}`}
        onClick={onClickedTabSection}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
