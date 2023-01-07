function Cart(props) {
  const { quantity = 0, handleBasket = Function.prototype } = props;
  return (
    <div className='cart-box right' onClick={handleBasket}>
      <i className='large material-icons'>local_grocery_store</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}

export default Cart;
