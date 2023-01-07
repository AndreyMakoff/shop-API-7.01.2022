import { useEffect, useState } from 'react';
// import { API_KEY, API_URL } from '../config.js';
import Preloader from './Preloader.jsx';
import GoodsList from './GoodsList.jsx';
import Cart from './Cart.jsx';
import BasketList from './BasketList.jsx';
import Alert from './Alert.jsx';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketshow, setBasket] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const addToBascet = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    setAlertTitle(item.title);
  };

  const handleBasket = () => {
    setBasket(!isBasketshow);
  };

  const removeBascet = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQauntity = el.quantity + 1;
        return {
          ...el,
          quantity: newQauntity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQauntity = el.quantity - 1;
        return {
          ...el,
          quantity: newQauntity >= 0 ? newQauntity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertTitle('');
  };

  useEffect(function getGoods() {
    fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      // headers: {
      //   'X-API-KEY': '9acdc79e-96eb-46b3-9ecb-ab642f813e59',
      //   'Content-Type': 'application/json',
      // },
    })
      .then((response) => response.json())
      .then((data) => {
        data && setGoods(data);
        setLoading(false);
      }, []);
  });
  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasket={handleBasket} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBascet={addToBascet} />
      )}
      {isBasketshow && (
        <BasketList
          order={order}
          handleBasket={handleBasket}
          removeBascet={removeBascet}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertTitle && <Alert title={alertTitle} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
