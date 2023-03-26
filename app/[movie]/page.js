import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=9f0d60fb73ce2b261485d824070652f5`
  );
  const res = await data.json();

  const similarMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}/similar?api_key=9f0d60fb73ce2b261485d824070652f5`
  );

  const similarRes = await similarMovies.json();
  console.log;
  return (
    <div>
      <section className="text-gray-400 bg-black body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              width={700}
              height={700}
              src={imagePath + res.backdrop_path}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Imdb Id: {res.imdb_id}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {res.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span>Rating: {res.vote_average}</span>
                </span>
              </div>
              <p className="leading-relaxed">{res.overview}</p>
              <h1 className="mt-3 text-white text-3xl title-font font-medium mb-1">
                More Details
              </h1>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <h2>
                  Original Language: {res.original_language}
                  <hr className="mt-3 mb-3" />
                  Runtime: {res.runtime}
                  <hr className="mt-3 mb-3" />
                  Status: {res.status}
                  <hr className="mt-3 mb-3" />
                  Tagline: {res.tagline}
                  <hr className="mt-3 mb-3" />
                  Vote Count: {res.vote_count}
                </h2>
                <div className="flex ml-6 items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-4">
            Similar Movies
          </h1>
          <div className="flex flex-wrap -m-4">
            {similarRes.results?.slice(0, 12).map((data) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={`/${data.id}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    {data.backdrop_path == null ? (
                      <Image
                        alt={`${data.title} Image not Found`}
                        className=" w-full lg:h-auto h-64 object-cover object-center rounded"
                        width={700}
                        height={700}
                        src={imagePath + data.poster_path}
                      />
                    ) : (
                      <Image
                        alt={`${data.title} Image not Found`}
                        className=" w-full lg:h-auto h-64 object-cover object-center rounded"
                        width={700}
                        height={700}
                        src={imagePath + data.backdrop_path}
                      />
                    )}
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Release Date: {data.release_date}
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      {data.title}
                    </h2>
                    <p className="mt-1">{data.runtime}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
