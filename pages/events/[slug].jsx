import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Image from "next/image";
export default function EventPage({ event }) {
  const { image, title, venue, time, content, description } = event.attributes;

  return (
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-12 px-16">
        <Image
          src={image.data.attributes.formats.medium.url}
          alt=""
          width={300}
          height={400}
        />
        <h4 className="card__subtitle text-sky-500 text-sm">{venue}</h4>
        <h1>{title}</h1>
        <div className="flex justify-center pb-4">
          <hr className="divider--sm w-8 " />
        </div>
        <p>{description}</p>
        <time>{time}</time>
        <p>{content}</p>
      </section>
      <div className="text-center my-12">
        <button className="btn btn--red">Go Back</button>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/events?filters[slug]=${slug}&populate=*`
  );
  const json = await res.json();
  const events = await json.data;

  return {
    props: { event: events[0] },
  };
}
