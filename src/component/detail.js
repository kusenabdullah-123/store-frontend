const Detail = (props) => {
  return (
    <div className="price-detail">
      <h2>Total</h2>
      <div className="sub-total">
        Product {props.qty}x Rp. {props.qty * props.price}
      </div>
      <div className="total">Total : Rp. {props.qty * props.price}</div>
    </div>
  );
};
export default Detail;
