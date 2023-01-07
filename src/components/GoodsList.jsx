import GoodsItem from './GoodsItem';

function GoodsList(props) {
  const { goods = [], addToBascet = Function.prototype } = props;
  if (!goods.length) {
    return (
      <div>
        <h3>OOOPS!!!</h3>
      </div>
    );
  }
  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBascet={addToBascet} />
      ))}
    </div>
  );
}
export default GoodsList;
