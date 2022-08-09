import React from 'react';
import tshirtImage from './../../assets/tshirt.png';
import { Container, Row, Painel, Column, Gallery, Section, Description } from './styles';
import SallerInfo from '../SallerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
   <Container>
    <Row>
      <a href="#">Compartilhar</a>
      <a href="#">Vender um igual</a>
    </Row>

    <Painel>
      <Column>
        <Gallery>
          <img src={tshirtImage} alt="T-shirt"/>
        </Gallery>       

        <Info/>
      </Column>

      <Column>
        <ProductAction />
        <SallerInfo />

        <WarrantySection />
        <WarrantySection />
        <WarrantySection />
      </Column>
    </Painel>
  </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantias</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o lorem ipsum</p>
        <p className="description">Receba o produto que você está esperando ou devoulvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
      <br />
      <br />
      Itmes: inclusos: <br />
      - 1x LED: <br />
      - 1x LED: <br />
      - 1x LED: <br />
      - 1x LED: <br />
      - 1x LED: <br />
      <br />
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
    </p>
  </Description>
)
export default Product;
