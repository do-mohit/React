import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-300 flex items-center text-gray-800 justify-between py-2 px-2">
      <Link className="text-2xl font-bold" to="/">
        MyNav
      </Link>
      <ul className="flex gap-4 h-full">
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link to={to} className={isActive ? "bg-white px-4 py-2 h-full rounded-sm" : "px-4 h-full"}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
