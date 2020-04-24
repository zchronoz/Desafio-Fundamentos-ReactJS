import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [pathName, setPathName] = useState('');

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className={pathName === '/' ? 'Selected' : ''} to="/">
            Listagem
          </Link>
          <Link
            className={pathName === '/import' ? 'Selected' : ''}
            to="/import"
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
