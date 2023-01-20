import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function EventPage({ event }) {
  const router = useRouter();

  const { image, title, venue, date, time, content, description, id } =
    event.attributes;
  const deleteEvent = async (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const res = await fetch(`${API_URL}/api/events/${event.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error("data.message");
      } else {
        router.push("/events");
      }
    }
  };
  return (
    <Layout>
      <ToastContainer />
      <section className="flex flex-col justify-center items-center space-y-12 px-16">
        <Image
          src={image.data.attributes.formats.medium.url}
          alt=""
          width={600}
          height={800}
        />
        <h4 className="card__subtitle text-sky-500 text-sm">{venue}</h4>
        <h1>{title}</h1>
        <div className="flex justify-center pb-4">
          <hr className="divider--sm w-8 " />
        </div>
        <p>{description}</p>
        <time>
          {new Date(date).toLocaleDateString("en-US")} {time}
        </time>
        <p>{content}</p>
      </section>
      <div className="w-full flex justify-end space-x-4">
        <button
          className="btn bg-background-darker rounded-md uppercase"
          onClick={deleteEvent}
        >
          삭제하기
        </button>
        <button className="btn bg-background-dark rounded-md uppercase">
          편집하기
        </button>
      </div>
      <div className="text-center my-12">
        <button className="btn btn--red">Go Back</button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const res = await fetch(
    `${API_URL}/api/events?filters[slug]=${slug}&populate=*`
  );
  const json = await res.json();
  const events = await json.data;

  return {
    props: { event: events[0] },
  };
}
