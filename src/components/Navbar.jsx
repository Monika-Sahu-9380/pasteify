import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-1 py-3 flex justify-between items-center select-none">
      {/* Logo / Brand */}
      <NavLink to="/" className="text-xl font-bold text-blue-600">
        Pasteify
      </NavLink>

      <div className="hidden sm:flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 transition-colors"
              : "text-gray-700 hover:text-blue-600 transition-colors"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 transition-colors"
              : "text-gray-700 hover:text-blue-600 transition-colors"
          }
        >
          My Pastes
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 transition-colors"
              : "text-gray-700 hover:text-blue-600 transition-colors"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
