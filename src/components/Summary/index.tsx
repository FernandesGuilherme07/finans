/* eslint-disable @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
import { default as incomeImg } from "../../assets/income.svg";
/* @ts-ignore */
import { default as outcomeImg } from "../../assets/outcome.svg";
/* @ts-ignore */
import { default as totalImg } from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$300,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$700,00</strong>
      </div>
    </Container>
  );
}
