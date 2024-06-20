import Button from "../../common/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-100 text-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl text-teal-700 font-bold">
          <i className="fa-solid fa-bullhorn"></i>
        </div>
        <nav className="hidden md:flex space-x-4">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-800 hover:text-red-900 border-b-8 font-semibold border-slate-700"
                  : "text-gray-950 font-medium hover:text-teal-700"
              }  `
            }
            to={`/`}
          >
            Home
          </NavLink>
        </nav>
        <div className="hidden md:flex space-x-4">
          <NavLink to={`/cart`}>
            <Button
              style="bg-teal-700 text-gray-100 px-4 py-2 rounded hover:bg-teal-500"
              children={<i className="fa-solid fa-cart-plus"></i>}
            />
          </NavLink>
        </div>
        <div className="md:hidden">
          <Button
            style="text-teal-700 hover:text-teal-500 focus:outline-none"
            children={
              <svg
                className="w-6 h-6 1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            }
          />
        </div>
      </div>
    </header>
  );
}
