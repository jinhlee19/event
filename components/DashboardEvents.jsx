import Link from "next/link";

export default function DashboardEvents({ evt, handleDelete }) {
  return (
    <div className="flex items-center justify-between">
      <h3>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.title}</a>
        </Link>
      </h3>
      <div className="text-2xl uppercase space-x-9">
        <Link href={`/events/edit/${evt.id}`}>편집</Link>
        <a href="#" className="" onClick={() => handleDelete(evt.id)}>
          삭제
        </a>
      </div>
    </div>
  );
}
