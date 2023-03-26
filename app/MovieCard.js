import Image from "next/image";
import Link from "next/link";
export default function MovieCard({
  title,
  image,
  releaseDate,
  votes,
  voteCount,
  id,
  firstAirDate,
  name,
  backdropImage,
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        href={`/${id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        {image == null ? (
          <Image
            alt={`${name} Image not Found`}
            className=" w-full lg:h-auto h-64 object-cover object-center rounded"
            width={700}
            height={700}
            src={imagePath + backdropImage}
          />
        ) : (
          <Image
            alt={`${name} Image not Found`}
            className=" w-full lg:h-auto h-64 object-cover object-center rounded"
            width={700}
            height={700}
            src={imagePath + image}
          />
        )}
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {releaseDate} {firstAirDate}
        </h3>
        <h2 className="text-white title-font text-lg font-medium">
          {title} {name}
        </h2>
        <p className="mt-1">Rating: {votes}</p>
      </div>
    </div>
  );
}
