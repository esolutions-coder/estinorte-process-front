import { useState } from "react";
import ESTINORTE_LOGO from "../assets/img/logo.png"
import estinorteRoutes from "../routing/routes.json";

interface EstinorteRoutes {
  name: string;
  pathname: string;
  active: boolean;
}

// Top NavBar
function NavBar() {
  const [userMenu, setUserMenu] = useState(false);
  const currentRoute = window.location.pathname;

  estinorteRoutes.forEach((route) => {
    if (route.pathname === currentRoute) {
      route.active = true;
    }
  });

  return (
    <nav className="inventarios__topnav">
      <div className="top__section">
        <div className="left">
          <div className="logo">
            <a href="/">
              <img src={ESTINORTE_LOGO} alt="Enterprise Logo" />
            </a>
          </div>
        </div>

        <div className={`right ${"" === "" ? "hide_element" : ""}`}>
          <ul className="estinorte_nav_menu">
            {estinorteRoutes.map((route) => (
              <li key={route.name}>
                <a
                  href={route.pathname}
                  className={`${route.active ? "active" : ""}`}
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul
          className={`userMenu_options_container ${
            userMenu ? "" : "hide_element"
          }`}
        >
          <li>
            <a href="/logout" className="userMenu_item">
              <span className="material-symbols-outlined">logout</span>{" "}
              <p>Salir</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
