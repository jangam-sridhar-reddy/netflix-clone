import React, { useState, useEffect } from 'react';
import "./banner.scss";

import request from '../../request';
import instance from '../../axios'

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await instance.get(request.fetchNetflixOriginals);
            const randomImage = response.data.results[Math.floor(Math.random() * response.data.results.length - 1)];
            setMovie(randomImage);
            return request;
        }
        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseImgUrl + movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__heading">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__btn" type="button">Play</button>
                    <button className="banner__btn" type="button">My List</button>
                </div>
                <div className="banner__description">
                    {truncate(movie?.overview, 150)}
                </div>
            </div>
            <div className="banner--fadeBottom" ></div>
        </div>
    )
}

export default Banner
