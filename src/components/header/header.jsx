import { NavLink } from "react-router-dom";
import { NavHeader, NavBox, Menu } from "./header";

export function Header() {
  return (
    <>
      <NavHeader>
        <Menu>
          <h3>Gerenciador de livros</h3>

          <NavBox>
            <NavLink to="/">Livros</NavLink>
            <NavLink to="/autores">Autores</NavLink>
          </NavBox>
        </Menu>
      </NavHeader>
    </>
  );
}
