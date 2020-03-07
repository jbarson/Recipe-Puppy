import React from 'react';
import PropTypes from "prop-types";


class RecipeList extends React.Component {
  static propTypes = {
    error: PropTypes.object,
    isLoaded: PropTypes.bool,
    items: PropTypes.array,
    page: PropTypes.number,
    turnPage: PropTypes.func,
  };

  convertToLegible = (string) => { 
    const txt = document.createElement("textarea");
    txt.innerHTML = string;
    return txt.value;
  }

  render() {
    const { error, isLoaded, items, page } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <button
            className="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-blue-500 hover:bg-blue-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md mr-4"
            onClick={() => this.props.turnPage(-1)}
          >
            Back
          </button>
          <button
            className="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-blue-500 hover:bg-blue-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md" 
            onClick={() => this.props.turnPage(1)}
          >
            Forward
          </button>
          <span className="float-right -mx-1 text-2xl" >Page {page}</span>
          <div className="flex flex-wrap -mx-1 overflow-hidden">
            {items.map(item => (
              <div key={item.title} className="my-1 p-4 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 border-solid border-2">
                <a className="text-2xl text-blue-500 hover:text-blue-700" href={item.href}>{this.convertToLegible(item.title)}</a>
                <div className="flex">
                <ul>
                {[...new Set(item.ingredients.split(','))].map(ingredient => (
                  <li  className="" key={item.title+ingredient}>{ingredient}</li>
                ))}
                </ul>
                  {item.thumbnail &&
                    <img className="h-24 w-half object-cover" src={item.thumbnail} alt={item.title} />
                  }
                  </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default RecipeList