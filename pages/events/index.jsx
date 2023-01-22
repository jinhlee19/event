import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from "@/config/index";

export default function eventPage({ events, total, page }) {
  return (
    <Layout>
      <section className="card-container px-16 w-full grid lg:grid-cols-4 h-full">
        {events.length === 0 && <div>No event To Show</div>}
        {events.length != 0 &&
          events.map((evt) => <EventItem key={evt.id} event={evt} />)}
      </section>

      <Pagination page={page} total={total} />
      <div className="mx-auto flex justify-center">
        <button className="btn btn--blue">Show More</button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  // page에 +를 붙임으로써 +page는 int가 된다. 또는 parseInt 등으로 변환해도 된다.
  const start = +page;

  // Fetch Total / Count
  const totalRes = await fetch(
    `${API_URL}/api/events?pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}&populate=*`
  );
  const totalData = await totalRes.json();
  const total = totalData.meta.pagination.total;
  console.log(total);

  const res = await fetch(
    // `${API_URL}/api/events?populate=*&_limit=${PER_PAGE}`
    // `${API_URL}/api/events?populate=*&_sort=date:ASC&?filters[_limit][$eq]=${PER_PAGE}`
    // `${API_URL}/api/events?pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}&populate=*`
    `${API_URL}/api/events?sort=date&Adesc&pagination[start]=${start}&pagination[limit]=${PER_PAGE}&populate=*`
  );
  const json = await res.json();
  const events = json.data;
  return {
    props: { events, page: +page, total },
  };
}
