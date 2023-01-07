function BasketItem(props) {
  const {
    id,
    title,
    price,
    quantity,
    removeBascet = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className='collection-item'>
      {title}*{quantity}={price * quantity}
      <i className='material-icons pluss' onClick={() => incQuantity(id)}>
        add_circle_outline
      </i>
      <i className='material-icons pluss' onClick={() => decQuantity(id)}>
        remove_circle
      </i>
      <span className='secondary-content' onClick={() => removeBascet(id)}>
        <i className='material-icons delete-bascket'>close</i>
      </span>
     
    </li>
  );
}
export default BasketItem;
