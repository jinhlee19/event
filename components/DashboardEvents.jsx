import Link from "next/link";

export default function DashboardEvents({ evt }) {
  return (
    <div className="flex items-center justify-between">
      <h3>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.title}</a>
        </Link>
      </h3>
      <div className="text-2xl uppercase space-x-9">
        <Link href={`/events/edit/${evt.id}`}>편집</Link>
        <Link href="#" className="" onClick={() => deleteEvent(evt.id)}>
          삭제
        </Link>
      </div>
    </div>
  );
}
