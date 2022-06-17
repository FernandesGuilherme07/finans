import { Header } from "./components/Header";

function App() {
  function handleOpenNewTransactionModal() {
    console.log("hello Toggle");
  }
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    </div>
  );
}

export default App;
