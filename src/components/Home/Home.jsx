import { useSelector } from "react-redux";
import { Poster } from "../Poster";
import { Products } from "../Products/Products";

export const Home = () => {
  const { list } = useSelector(({ products }) => products);
  return (
    <>
      <Poster />
      <Products products={list} title="Trending" amount={5} />
    </>
  );
};
