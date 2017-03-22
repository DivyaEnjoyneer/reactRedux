import React, { Component } from 'react';

//component which produce HTML & which is going to be exported such that index.js
//can import & render that HTML on to the page
class SearchBar extends Component{


    constructor(props){
       super(props);

      this.state={ term: ' '};
    }
    render(){
    return(
      <div className="search-bar">
        <input
        value= {this.state.term}
        onChange={event => this.onInputChangeTerm(event.target.value)} />
      </div>
    );
  }

    onInputChangeTerm(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }

}

export default SearchBar;
