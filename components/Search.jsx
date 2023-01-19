import { useRouter } from "next/router";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Events"
        className="px-4 py-2"
      />
      <IoSearchOutline
        onClick={handleSubmit}
        className="w-6 h-6 cursor-pointer"
      />
    </form>
  );
}
