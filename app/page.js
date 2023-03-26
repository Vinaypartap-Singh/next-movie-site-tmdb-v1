import Link from "next/link";
import MovieCard from "./MovieCard";

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
      <section className="text-gray-400 bg-black body-font w-[1200px] m-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1634473637038-eeeb90247ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QmxhY2slMjBJbWFnZXMlMjBNb3ZpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Explore The Movies
              <br className="hidden lg:inline-block" />
              You Like
            </h1>
            <p className="mb-8 leading-relaxed">
              Since the dawn of the motion picture industry, those who produced
              and exhibited films realized early on how important it was to
              advertise them effectively. The grandiose language used to entice
              the moviegoing public was pivotal in drawing “boffo” box office.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore Movies
              </button>
              <Link
                href={"/about"}
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Popular Movies
          </h1>
          <div className="flex flex-wrap -m-4">
            {res.results.slice(0, 4).map((data) => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Top Rated Movies
          </h1>
          <div className="flex flex-wrap -m-4">
            {topRatedRes.results.slice(0, 4).map((data) => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Upcoming Movies
          </h1>
          <div className="flex flex-wrap -m-4">
            {upcomMovieRes.results.slice(0, 4).map((data) => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Now Playing Movies
          </h1>
          <div className="flex flex-wrap -m-4">
            {nowPlayingRes.results.slice(12, 16).map((data) => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            All Trending Shows
          </h1>
          <div className="flex flex-wrap -m-4">
            {trendingAllShowsRes.results.slice(4, 8).map((data) => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Top Trending Movies
          </h1>
          <div className="flex flex-wrap -m-4">
            {trendingMoviesRes.results.slice(4, 8).map((data) => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Top Trending Shows
          </h1>
          <div className="flex flex-wrap -m-4">
            {trendingTvShowsRes.results.slice(4, 8).map((data) => {
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Top Trending Personality Shows
          </h1>
          <div className="flex flex-wrap -m-4">
            {trendingPersonRes.results.slice(4, 8).map((data) => {
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
