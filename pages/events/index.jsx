import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function eventPage({ events }) {
  return (
    <Layout>
      <section className="card-container px-16 w-full grid lg:grid-cols-4">
        {events.length === 0 && <div>No event To Show</div>}
        {events.length != 0 &&
          events.map((evt) => <EventItem key={evt.id} event={evt} />)}
      </section>
      <div className="mx-auto flex justify-center">
        <button className="btn btn--blue">Show More</button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const json = await res.json();
  const events = json.data;
  return {
    props: { events },
  };
}
