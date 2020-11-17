import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/global';

export default function SignIn() {
  return (
    <>
      <Container>
        <Title isWhite={false}>
          Login
          <small> Oie</small>
          <p> Lorem pisum </p>
        </Title>
        <p> shfiausguasguasoigoiaso</p>
        <button type="submit"> Enviar</button>
      </Container>
    </>
  );
}
