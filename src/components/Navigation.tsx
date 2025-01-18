import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navigation() {
  const navigationItems = [
    { title: "Home", path: "/" },
    { title: "Reusability", path: "/reusability" },
  ];

  const navigationElements = navigationItems.map((item, index) => (
    <NavLink
      key={index}
      to={item.path}
      className={({ isActive }) =>
        clsx(
          "font-medium p-2 rounded-md",
          {
            "dark:bg-gray-700 bg-gray-100": isActive,
            "opacity-75 hover:opacity-100 transition-all duration-300": !isActive,
          }
        )
      }
    >
      {item.title}
    </NavLink>
  ));

  return (
    <nav>
      <div className="p-2">
        <div className="flex gap-2">{navigationElements}</div>
      </div>
    </nav>
  );
}
