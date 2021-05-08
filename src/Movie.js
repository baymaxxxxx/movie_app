import React from "react"
import proptype from "prop-types"
import "./Movie.css"


// state가 필요없기 때문에 함수컴포넌트

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre, index) => <li className="genres__genre" key={index}>{genre}</li>)}</ul>
            <h4>{genres}</h4>
            <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
        </div>
    )
}

Movie.proptype = {
    id: proptype.number.isRequired,
    title: proptype.string.isRequired,
    year: proptype.number.isRequired,
    summary: proptype.string.isRequired,
    poster: proptype.string.isRequired,
    genres: proptype.arrayOf(proptype.string).isRequired
}

export default Movie;
