import React from 'react'
import PropTypes from "prop-types"

class SearchBox extends React.Component {
  recipeRef = React.createRef()

  static propTypes = {
    searchRecipe: PropTypes.func
  }

  handleSubmit = event => { 
    event.preventDefault()
    console.log(this.recipeRef.current.value)
    this.props.searchRecipe(this.recipeRef.current.value)
    event.currentTarget.reset()
  }

  render() {
    return (
      <form
        className="w-full max-w-sm py-4"
        onSubmit={this.handleSubmit}
      >
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            ref={this.recipeRef}
            type="text"
            placeholder="Recipe"
            aria-label="Recipe"
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
     )
  }
}

export default SearchBox
