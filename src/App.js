import "./App.css";

import Cart from "./component/cart";

function App() {
  return (
    <div className="container">
      <h1>Kusen Store</h1>
      <div className="container-card">
        <Cart nama="Laptop Msi" harga={10000} />
      </div>
    </div>
  );
}

export default App;
