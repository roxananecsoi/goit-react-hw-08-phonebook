import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
  display: inline-block;
  text-decoration: none;
  margin-bottom: 6px;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 700;
  color: black;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: white;
    background-color: #44176e;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  }

  &.active {
    color: #fff;
    background-color: #b11a90;
  }

  &:focus-visible {
    outline: 4px solid #91caff;
    outline-offset: 1px;
    transition: outline-offset 0s, outline 0s;
  }
`;
