// import Image from "next/image";
import Link from "next/link";
export default function EventItem({ event }) {
  const { name, vanue, image, slug, time } = event.attributes;
  console.log(image.data[0].attributes.formats.medium.url);
  console.log(image.data);
  return (
    <Link href={`/events/${slug}`}>
      <div className="card mb-8 w-72 text-center space-y-4 py-8 cursor-pointer">
        <figure className="w-72 h-full relative mb-4 ">
          <div className="w-full h-full relative">
            {/* <Image
              src={image.data[0].attributes.formats.medium.url}
              width={300}
              height={400}
              // layout="fill"
              objectFit="contain"
              alt="card-image"
            ></Image> */}
          </div>
        </figure>
        <h4 className="card__subtitle text-sky-500">{vanue}</h4>
        <h2 className="card__title">{name}</h2>
        <div className="flex justify-center pb-4">
          <hr className="divider--sm w-8" />
        </div>
        <time>{time}</time>
      </div>
    </Link>
  );
}
