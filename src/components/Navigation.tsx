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
          "text-2xl font-medium p-2 rounded-md",
          {
            "dark:bg-gray-700": isActive,
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
