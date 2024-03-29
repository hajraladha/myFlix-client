import React from 'react';
import { MovieCard } from './movie-card/movie-card';
import { MovieView } from './movie-view/movie-view';
export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Forrest Gump', Description: 'Forrest Gump, an innocent and kind-hearted Alabama boy, has been dealing with other peoples unkindness nearly all his life. Having grown up with beautiful Jenny, his only friend, Forrest yearns to learn all about the ways of the world and embarks on a mission to find his true purpose in life.', Genre: 'Drama', Director: 'Robert Zemeckis', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg'},
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'It tells the story of banker, who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.', Genre: 'Drama', Director: 'Frank Darabont', ImagePath: 'https://www.kingwiki.de/images/6/6a/Die_Verurteilten%28Film%29.jpg'},
        { _id: 3, Title: 'Gladiator', Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', Genre:'Action', Director:"Ridley Scott", ImagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png'}
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  // Condensed code
  render() {
    const { movies,selectedMovie } = this.state;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}

  // This function is what returns the visual representation of the component, in other words, it renders what will be displayed on the screen.                                             
//   render() {
//     const movies = this.state.movies;
//     if (movies.length === 0){
//       return <div className="main-view">The list is empty!</div>;
//     } else {
//       return (
//         <div className="main-view">
//           {movies.map((movie) => {          // The map() method in the code above maps through the movies array, for each element in an array
//             return <div key={movie._id}>{movie.Title}</div>; //
//           })}
//         </div>
//       );
//     }
//   }
// }

// export default MainView;

  // render() 
  //   const { movies, selectedMovie } = this.state;
  
  //   if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
  //   return (
  //     <div className="main-view">
  //       {selectedMovie
  //         ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
  //         : movies.map(movie => (
  //           <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
  //         ))
  //       }
  //     </div>
  //   );
  



export default MainView;


