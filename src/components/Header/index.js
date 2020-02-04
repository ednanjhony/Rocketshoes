import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Carrinho } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const carrinhoSize = useSelector(state => state.carrinho.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Carrinho to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{carrinhoSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Carrinho>
    </Container>
  );
}
