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
    <div className="search flex space-x-4">
      <form
        action=""
        onSubmit={handleSubmit}
        onChange={(e) => setTerm(e.target.value)}
        className="flex space-x-4"
      >
        <input type="on-submit" />
        <IoSearchOutline className="w-6 h-6" />
      </form>
    </div>
  );
}
