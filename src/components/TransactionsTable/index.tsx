import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th className="data">Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de App</td>
            <td className="deposit">R$15.000</td>
            <td>Desenvolvimento</td>
            <td className="data">16/03/2021</td>
          </tr>

          <tr>
            <td>X-Bacon</td>
            <td className="withdraw">-R$25</td>
            <td>Desenvolvimento</td>
            <td className="data">10/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
