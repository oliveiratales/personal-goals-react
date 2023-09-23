import { NavLink } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
  return (
    <nav>
      <h2><a href="/">Personal Goals</a></h2>
      <ul>
        <li>
          <NavLink to="/">Minhas metas</NavLink>
        </li>
        <li>
          <NavLink to="/goal/new" className="btn">
            Criar nova meta
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
