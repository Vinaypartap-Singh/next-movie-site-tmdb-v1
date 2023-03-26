import Link from "next/link";
import MovieCard from "../MovieCard";

export default async function Home() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=9f0d60fb73ce2b261485d824070652f5"
  );
  const res = await data.json();

  const topRatedMovies = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=9f0d60fb73ce2b261485d824070652f5"
  );

  const topRatedRes = await topRatedMovies.json();

  const upcomingMovies = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=9f0d60fb73ce2b261485d824070652f5"
  );

  const upcomMovieRes = await upcomingMovies.json();

  const nowPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9f0d60fb73ce2b261485d824070652f5"
  );

  const nowPlayingRes = await nowPlaying.json();

  const trendingAllShows = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=9f0d60fb73ce2b261485d824070652f5"
  );

  const trendingAllShowsRes = await trendingAllShows.json();

  const trendingMovies = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=9f0d60fb73ce2b261485d824070652f5"
  );

  const trendingMoviesRes = await trendingMovies.json();

  const trendingTvShows = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=9f0d60fb73ce2b261485d824070652f5"
  );

  const trendingTvShowsRes = await trendingTvShows.json();

  const trendingPerson = await fetch(
    "https://api.themoviedb.org/3/trending/person/day?api_key=9f0d60fb73ce2b261485d824070652f5"
  );

  const trendingPersonRes = await trendingPerson.json();

  return (
    <main className="text-center">
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            All Movies & Series
          </h1>
          <div className="flex flex-wrap -m-4">
            {res.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {topRatedRes.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {upcomMovieRes.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                  backdropImage={data.backdrop_path}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {nowPlayingRes.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                  backdropImage={data.backdrop_path}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {trendingAllShowsRes.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                  backdropImage={data.backdrop_path}
                  firstAirDate={data.first_air_date}
                  name={data.name}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {trendingMoviesRes.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                  backdropImage={data.backdrop_path}
                  firstAirDate={data.first_air_date}
                  name={data.name}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {trendingTvShowsRes.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                  backdropImage={data.backdrop_path}
                  firstAirDate={data.first_air_date}
                  name={data.name}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {trendingPersonRes.results.map((data) => {
              return (
                <MovieCard
                  key={data.id}
                  title={data.title}
                  image={data.profile_path}
                  releaseDate={data.release_date}
                  votes={data.vote_average}
                  voteCount={data.vote_count}
                  id={data.id}
                  backdropImage={data.backdrop_path}
                  firstAirDate={data.first_air_date}
                  name={data.name}
                />
              );
            })}
          </div>
        </div>
      </section>

      <button className="inline-flex text-white bg-red-500 border-0 py-2 my-24 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
        Explore All Movies
      </button>
    </main>
  );
}
