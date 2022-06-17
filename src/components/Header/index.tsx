import { Container, Content } from "./styles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="dt money" />
          <h1>Finans</h1>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
