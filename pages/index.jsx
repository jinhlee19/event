import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "../config";
export default function LandingPage({ events }) {
  return (
    <Layout>
      {/* <div className="card-container grid lg:grid-cols-4"> */}
      <section className="card-container px-16 w-full">
        <div className="columns-1 md:columns-2 lg:columns-4 ">
          {events.length === 0 && <div>No event To Show</div>}
          {events.map((evt) => (
            <EventItem key={evt.id} event={evt} />
          ))}
        </div>
      </section>
      <div className="mx-auto flex justify-center">
        <button className="btn btn--blue">Show More</button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 8) },
  };
}
