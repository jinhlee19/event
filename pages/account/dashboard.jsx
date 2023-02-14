import DashboardEvents from "@/components/DashboardEvents";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";

export default function DashboardPage({ events }) {
  // console.log(events);
  // todo check 왜 자꾸 두번씩...?

  const deleteEvent = (id) => {
    console.log(id);
  };
  return (
    <Layout title="대시보드">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <div className="space-y-6">
          <h1>대시보드</h1>
          <hr className="border-2" />
        </div>

        <h2>My Events</h2>
        <hr className="border border-gray-400" />
        <div className="space-y-6">
          {events.map((evt) => (
            <DashboardEvents
              key={evt.id}
              evt={evt}
              handleDelete={deleteEvent}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  console.log(req);

  const res = await fetch(`${API_URL}/api/events/me`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const events = await res.json();
  // console.log(token);

  return {
    props: {
      events,
    },
  };
}
