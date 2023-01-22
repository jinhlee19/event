import { PER_PAGE } from "@/config/index";
import Link from "next/link";

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <div className="space-x-4 text-center mb-12">
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a className="btn">Prev</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a className="btn">Next</a>
        </Link>
      )}
    </div>
  );
}
