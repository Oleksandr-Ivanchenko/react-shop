import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "../../api/api";
import { Filters, Good } from "../../utils/interface";
import { setGoodsAction } from "../../store/actions";
import { getFilters, getGoodsSelector } from "../../store/selectors";
import Card from "../Card/Card";
import './CardList.scss';

export const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const filters: Filters = useSelector(getFilters);
  const goods = useSelector(getGoodsSelector(filters));

  useEffect(() => {
    getGoods().then(goodsFromServer => {
      dispatch(setGoodsAction(goodsFromServer));
    })
  }, [dispatch]);

  return (
    <div className="cardlist">
      {goods.map((good: Good) =>
        <Card 
          key={good.id}
          image={good.image}
          id={good.id}
          name={good.name}
          brand={good.brand}
          category={good.category}
          cost={good.cost}
          description={good.description}
        />
      )}
    </div>
  )
}

export default CardList;