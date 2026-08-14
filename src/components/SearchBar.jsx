import { FaSearch } from "react-icons/fa";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <FaSearch
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
        text-lg
        "
      />

      <input
        type="text"
        placeholder="Search Bitcoin"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
        w-full
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-700

        bg-white/80
        dark:bg-slate-800/80

        px-12
        py-4

        text-black
        dark:text-white

        placeholder:text-gray-400

        backdrop-blur-lg

        shadow-lg
        transition-all
        duration-300

        focus:border-blue-500
        focus:outline-none
        focus:ring-4
        focus:ring-blue-200
        dark:focus:ring-blue-900

        hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
        "
      />
    </div>
  );
}