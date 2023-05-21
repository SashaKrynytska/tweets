import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
font-family: 'Montserrat';
  padding: 8px 16px;
  font-size: 22px;
line-height: 1.25px;
text-transform: uppercase;
  color: white;
  border-radius: 4px;
  text-decoration: none;
`;