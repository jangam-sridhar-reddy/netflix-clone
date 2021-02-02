import React from "react";
import request from "./request";

import Row from "./components/row/row.component";
import Banner from "./components/banner/banner.component";
import Nav from "./components/nav/nav.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={request.fetchNetflixOriginals}
        isRowLarge
      />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
      <Row title="Top Rated" fetchurl={request.fetchTopRated} />
      <Row title="Action movies" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy movies" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror movies" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romance movies" fetchurl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
