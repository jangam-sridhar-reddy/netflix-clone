import React, { useState, useEffect } from 'react';
import "./row.scss";
import instance from '../../axios';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchurl, isRowLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {

        async function fetchData() {
            const request = await instance.get(fetchurl);
            setMovies(request.data.results);
        }

        fetchData();

    }, [fetchurl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMove = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            console.log(movie?.name)
            movieTrailer(movie?.name || movie?.title || "").then(url => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            }).catch(e => console.log(e))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => {
                        return (
                            <img key={movie.id} onClick={() => handleMove(movie)} src={`${baseImgUrl}${isRowLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row__image ${isRowLarge && "row__image--large"} `} />

                        )
                    })
                }
            </div>
            {
                trailerUrl && (<YouTube
                    videoId={trailerUrl}                  // defaults -> null
                    opts={opts} />)
            }

        </div>
    )
}

export default Row
