function GoodsItem(props) {
  const {
    id,
    price,
    title,
    category,
    image,
    addToBascet = Function.prototype,
  } = props;
  return (
    <div>
      <div className='row'>
        <div className='col s12 m7'>
          <div className='card' id={id}>
            <div className='card-image'>
              <img src={image} alt={title} style={{ height: '20rem' }} />
              <span className='card-title'>{title}</span>
            </div>
            <div className='card-content'>
              <p>{category}</p>
            </div>
            <div className='card-action'>
              <button
                onClick={() =>
                  addToBascet({
                    id,
                    title,
                    price,
                  })
                }
                className='waves-effect waves-light btn blue lighten-4'
              >
                Купить
              </button>
              <span className='right'>{price} $</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GoodsItem;
// "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
