import React from 'react';

import { 
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Buttons,
  Benefits,
  ShieldIcon
} from './styles';

const ProductAction: React.FC = () => {
  return (
   <Container>
    <Condition>Novo</Condition>

    <Row>
      <h1>Camisa branca de marca desconhecida</h1>
      <HeartIcon />
    </Row>

    <DispatchTag>Enviando Normalmente</DispatchTag>

    <PriceCard>
      <PriceRow>
        <span className="symbol">R$</span>
        <span className="fraction">34</span>
        <span className="cents">99</span>
      </PriceRow>

      <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
    </PriceCard>

    <StockStatus>Estoque dispnível</StockStatus>

    <MethodCard>
      <CheckIcon />

      <div>
        <span className="title">Frete grátis</span>
        <span className="details">Benefício Lorem Ipsum</span>
        <a href="#" className="more">Ver mais opções</a>
      </div>
    </MethodCard>

    <Actions>
      <Buttons solid >Comprar agora</Buttons>
      <Buttons>Adicionar ao carrinho</Buttons>
    </Actions>

    <Benefits>
      <li>
        <ShieldIcon />
        <p>
          Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.
        </p>
      </li>
    </Benefits>
  </Container>
  );
}

export default ProductAction;
