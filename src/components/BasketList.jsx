import BasketItem from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasket = Function.prototype,
    removeBascet = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;
  const totalOrder = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className='collection basket-list '>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeBascet={removeBascet}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className='collection-item active'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalOrder}$.
        <button className='waves-effect cyan lighten-1 btn-small right'>
          Оформить
        </button>
      </li>
      <i className='material-icons close-item' onClick={handleBasket}>
        close
      </i>
    </ul>
  );
}
export default BasketList;
