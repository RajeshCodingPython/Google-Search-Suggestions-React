import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {change: '', suggestionw: ''}

  onChngeElment = event => {
    const resut = event.target.value
    this.setState({change: resut})
  }

  onChngeElment = suggestion => {
    console.log(suggestion)
    this.setState({suggestionw: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {change, suggestionw} = this.state

    const mysuggestionsList = suggestionsList.filter(eachItam =>
      eachItam.suggestion.includes(change),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
          onClick={this.inputChange}
        />
        <div className="suerch-container">
          <div className="suerch-img-continer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input type="search" className="search" value={suggestionw} />
          </div>
          <ul>
            {mysuggestionsList.map(eachCard => (
              <SuggestionItem
                suggestionsListEachItam={eachCard}
                key={eachCard.id}
                updateValue={this.onChngeElment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
