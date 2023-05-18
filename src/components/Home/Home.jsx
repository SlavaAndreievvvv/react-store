import { useDispatch, useSelector } from "react-redux";
import { Poster } from "../Poster";
import { Products } from "../Products";
import { Categories } from "../Categories";
import { Banner } from "../Banner";
import { useEffect } from "react";
import { filteredByPrice } from "../../features/products/productsSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filteredByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <Poster />
      <Products products={list} title="Trending" amount={5} />
      <Categories products={categories.list} title="Worth seeing" amount={5} />
      <Banner />
      <Products products={filtered} title="Less then 100$" amount={5} />
    </>
  );
};
