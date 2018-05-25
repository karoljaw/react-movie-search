import React, { Component } from 'react';
import Navigation from './Navigation';
import MovieRow from './MovieRow';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.searchPhrase = this.searchPhrase.bind(this);

    this.state = {
      rows: [],
      inputValue: ''
    }

  }


  loadMovies(searchTerm) {
    let url = "https://api.themoviedb.org/3/search/movie?api_key=3c01092d03503ebe5d7aa03c34a4cb22&query=" + searchTerm;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data successfully");

        let movieItem = [];
        data.results.forEach(movie => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          movieItem.push(<MovieRow key={movie.id} movie={movie}></MovieRow>)
        })
        console.log(movieItem);
        this.setState({ rows: movieItem })
      })
      .catch(error => console.log("Failed to fetch data"))
  }

  searchPhrase(e) {
    this.setState({ inputValue: e.target.value })
    this.loadMovies(e.target.value);
    
  }

  render() {

    return (
      <div>
      <Navigation value={this.state.inputValue} change={this.searchPhrase}>
      </Navigation>
        {this.state.rows}
      </div>
    )
  }
}

  export default App;