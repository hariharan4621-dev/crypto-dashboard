import { useContext } from "react";
import {
  FaSun,
  FaMoon,
  FaRocket,
  FaCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const location = useLocation();

  return (
    <nav
      className="
      sticky
      top-0
      z-50
      border-b
      border-slate-700/30
      bg-white/80
      backdrop-blur-xl
      shadow-lg
      transition-all
      duration-300
      dark:bg-slate-900/80
    "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center,
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            shadow-lg
          "
          >
            <FaRocket />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Crypto Dashboard
            </h1>

            <p className="text-xs text-gray-500">
              Live Market Tracker
            </p>
          </div>
        </div>

        {/* Menu */}

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className={`transition font-medium ${
              location.pathname === "/"
                ? "text-cyan-500"
                : "text-slate-700 hover:text-cyan-500 dark:text-gray-300"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/watchlist"
            className={`transition font-medium ${
              location.pathname === "/watchlist"
                ? "text-cyan-500"
                : "text-slate-700 hover:text-cyan-500 dark:text-gray-300"
            }`}
          >
            ⭐ Watchlist
          </Link>

          {/* Live */}

          <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 dark:bg-green-900/30">
            <FaCircle className="animate-pulse text-[10px] text-green-500" />

            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              LIVE
            </span>
          </div>

          {/* Theme */}

          <button
            onClick={toggleTheme}
            className="
              rounded-xl
              bg-slate-200
              p-3
              transition-all
              duration-300
              hover:scale-110 
              hover:shadow-lg
              dark:bg-slate-700
            "
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400 text-lg cursor-pointer" />
            ) : (
              <FaMoon className="text-slate-800 text-lg cursor-pointer" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}