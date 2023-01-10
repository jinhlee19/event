import Image from "next/image";
import Link from "next/link";
export default function PostItem({ post }) {
  const { title, category, imageUrl, slug, time } = post;
  return (
    <Link href={`/posts/${slug}`}>
      <div className="card mb-8 w-72 text-center space-y-4 py-8 cursor-pointer">
        <figure className="w-72 h-full relative mb-4 ">
          <Image
            src={imageUrl}
            width={300}
            height={400}
            // layout="fill"
            className=" object-contain"
            alt="."
          ></Image>
        </figure>
        <h4 className="card__subtitle text-sky-500">{category}</h4>
        <h2 className="card__title">{title}</h2>
        <div className="flex justify-center pb-4">
          <hr className="divider--sm w-8" />
        </div>
        <time>{time}</time>
      </div>
    </Link>
  );
}
