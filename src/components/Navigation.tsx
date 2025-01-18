import { NavLink } from "react-router-dom";

export default function Navigation() {
    const navigationItems = [
        { title : "Home", path: "/" },
        { title : "Reusability", path: "/reusability" },
    ]

    const navigationElements = navigationItems.map((item) => (
        <li key={item.title}>
            <NavLink to={item.path}>{item.title}</NavLink>
        </li>
    ));

    return (
        <nav>
            {navigationElements}
        </nav>
    );
}