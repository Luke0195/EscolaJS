import React from 'react';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <>
      <Nav>
        <div>
          <FaHome size={27} />
          <FaUserAlt size={23} />
          <FaSignInAlt size={27} />
        </div>
      </Nav>
    </>
  );
}
