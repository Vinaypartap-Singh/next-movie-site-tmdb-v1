import MovieCard from "../MovieCard";

export default async function TvShows() {
  const pageNumber = 1;
  // for (let pageNumber = 1; pageNumber < 10; pageNumber++) {
  //   return console.log(pageNumber);
  // }
  const tvData = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=9f0d60fb73ce2b261485d824070652f5&page=${pageNumber}`
  );
  const tvRes = await tvData.json();
  return (
    <div>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Popular Movies
          </h1>
          <div className="flex flex-wrap -m-4">
            {tvRes.results.map((data) => {
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
    </div>
  );
}
