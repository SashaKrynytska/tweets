import {  StyledLink , NavList } from "./NavBar.styled";


export const NavBar = () => {
    return (
        <NavList>
          <li>
            <StyledLink  to="/" end>
              Home
            </ StyledLink >
          </li>
          <li>
            < StyledLink  to="tweets">Tweets</ StyledLink >
          </li>
        </NavList>
    );
  };