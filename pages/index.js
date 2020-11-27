import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Search from '../components/Search';
import Marquee from '../components/Marquee';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home({ movies }) {

  let marque = "POPULAR";
  const [query, setQuery] = useState(null);
  const [movie, setMovie] = useState(!query || query === "" ? movies: setMovies());

  function changeQuery(value) {
    setQuery(value);
  }

  function setMovies() {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      });

    marque = query.toUpperCase();
  }

  return (<div>
    <Head>
      <title>MovieZilla</title>
      <link rel="icon" href="../favicon.ico" />
    </Head>
    <Header />
    <br />
    <br />
    <Search onInput={changeQuery} />
    <Marquee title={marque} />
    <div className="container">
      {movie.results.map(result => (<Card key={result.id} title={result.title} path={result.poster_path} rating={result.vote_average} desc={result.overview} />))}
    </div>
    <Footer />
  </div>);
}

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.API_KEY;
  const res = await fetch(url);
  const movies = await res.json();
  return {
    props: {
      movies,
    },
  }
}