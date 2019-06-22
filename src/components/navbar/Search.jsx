import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isActive: false
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="search-container">
        <input
        type="text"
        className="search-input"
        placeholder="Search" 
        />
        <i className="fas fa-search active-search-icon"></i>
        <div className="inactive-search">
          <div className="text-container">
            <i className="fas fa-search"></i>
            <span className="text">Search</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;