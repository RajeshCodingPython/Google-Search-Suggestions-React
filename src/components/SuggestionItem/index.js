// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionsListEachItam, updateValue} = props
  const {suggestion} = suggestionsListEachItam
  const changeEl = () => {
    updateValue(suggestion)
  }
  return (
    <li className="suggestion-card">
      <p className="suggestion-name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        value={suggestion}
        onClick={changeEl}
      />
    </li>
  )
}
export default SuggestionItem
