import React from "react";
import axios from "axios";
import Movie from "./Movie"
import "./App.css"

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  //getMovies는 axios가 끝날때까지 기다렸다가 계속해 (axios.get은 완료되기까지 시간이 필요함)
  getMovies = async () => {
    const {
      data: {
        data: { movies } } } =
      await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies)
    this.setState({
      movies /* movies:movies */
      , isLoading: false
    })
  }

  // application이 mount된 후 (=componentDidMount) getMovies함수를 호출
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ?
          (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>)
          : (
            <div className="movies">
              {movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    genres={movie.genres}
                    year={movie.year}
                    summary={movie.summary}
                    poster={movie.medium_cover_image} />
                ))}
            </div>
          )
        }
      </section>
    )
  }

}




export default App;
