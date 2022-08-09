import React from 'react'
import { Container, Wrapper } from './styles';
import Footer from '../Footer';
import Header from '../Header';
import Product from '../Product';

const Layout: React.FC = () => {
  return (
   <Container>
    <Header />
      <Wrapper>
        <Product />
      </Wrapper>
    <Footer/>
  </Container>
  );
}

export default Layout;
