import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // event  handle functions
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full py-2 px-5 focus:outline-none focus:ring focus:ring-yellow-400 focus:px-8 transition-all duration-300 bg-yellow-100 placeholder:text-sm placeholder:text-stone-900 w-28 sm:w-[20rem] mr-6rem "
      />
    </form>
  );
}
