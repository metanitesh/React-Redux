import React, { Component } from 'react';
import Movie from './Movie';


class FavoriteMovies extends Component {

  

  render() {

    const favoriteMoviesByUsers = {}
    this.props.profiles.forEach((profile) => {
      
      const users = this.props.users;
      const movieId = profile.favoriteMovieID
      const userId = profile.userID
      

      if(favoriteMoviesByUsers[movieId]){
        favoriteMoviesByUsers[movieId].push(users[userId].name)
      }else{
        favoriteMoviesByUsers[movieId] = [users[userId].name]
      }
    });

    
    const allMoviesByUsers = {}
    for (let movieId in this.props.movies){
      const movies = this.props.movies;
      allMoviesByUsers[this.props.movies[movieId].name] = favoriteMoviesByUsers[movieId] || null;
    }

      console.log( Object.keys(allMoviesByUsers));
    // const moviesJsx = [];
    // for (let movieName in allMoviesByUsers){
    //   const element = <div>
    //     <h2> {movieName}</h2>
    //     <ol>
    //     {allMoviesByUsers[movieName] ? allMoviesByUsers[movieName].map ( user => <li> {user} </li>) : "nopw"  }
    //     </ol>

    //   </div>
    //   moviesJsx.push(element)
    // }

    return (
      <div>
      {
        Object.keys(allMoviesByUsers).map( movie => <Movie movieName={movie} users={allMoviesByUsers[movie]} /> )
      }
      
      </div>
    );
  }
}

export default FavoriteMovies;