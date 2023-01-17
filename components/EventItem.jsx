import Image from "next/image";
import Link from "next/link";

export default function EventItem({ event }) {
  const { name, venue, image, slug, time } = event.attributes;
  console.log(image.data.attributes.formats.medium.url);
  return (
    <Link href={`/events/${slug}`}>
      <div className="card mb-8 w-72 text-center space-y-4 py-8 cursor-pointer">
        <figure className="w-72  relative mb-4 ">
          <div className="">
            <Image
              src={image.data.attributes.formats.medium.url}
              width={300}
              height={400}
              // layout="fill"
              // objectFit="contain"
              alt="card-image"
            />
          </div>
        </figure>
        <h4 className="card__subtitle text-sky-500">{venue}</h4>
        <h2 className="card__title">{name}</h2>
        <div className="flex justify-center pb-4">
          <hr className="divider--sm w-8" />
        </div>
        <time>{time}</time>
      </div>
    </Link>
  );
}
