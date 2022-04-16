import { useState } from "react";
import Detail from "./detail";
const Cart = (props) => {
  const [qty, setQty] = useState(1);
  const Addqty = (value) => {
    setQty(qty + 1);
  };
  return (
    <>
      <div className="card">
        <img className="images" src="/images.jpeg" alt="Laptop foto " />
        <div className="kanan">
          <h2>{props.nama}</h2>
          <div className="price">Rp. {props.harga}</div>
          <p className="desc">Laptop Msi</p>
          <div className="quantity">
            <button>-</button>
            <input type="text" value={qty} name="qty" id="qty" readOnly />
            <button
              onClick={() => {
                Addqty();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <Detail qty={qty} price={props.harga} />
    </>
  );
};
export default Cart;
