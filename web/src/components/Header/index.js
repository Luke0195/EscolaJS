import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <>
      <Nav>
        <div>
          <Link to="/">
            <FaHome size={27} />
          </Link>
          <Link to="/teste">
            <FaUserAlt size={23} />
          </Link>
          <Link to="/">
            <FaSignInAlt size={27} />
          </Link>
        </div>
      </Nav>
    </>
  );
}
