import Image from "next/image";
import Link from "next/link";

export default function EventItem({ event }) {
  const { title, image, slug, time, date, category } = event.attributes;

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
        <h4 className="card__subtitle text-sky-500">{category}</h4>
        <h2 className="card__title">{title}</h2>
        <div className="flex justify-center pb-4">
          <hr className="divider--sm w-8" />
        </div>
        <time>
          {new Date(date).toLocaleDateString("en-US")} {time}
        </time>
      </div>
    </Link>
  );
}
