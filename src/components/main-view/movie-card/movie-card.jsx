import React from 'react';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return <div className="movie-card" onClick={() => this.props.onMovieClick(movie)} >{movie.Title}</div>;
  }
}