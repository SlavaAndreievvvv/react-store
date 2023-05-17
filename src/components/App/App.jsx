import { useDispatch } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { AppRoutes } from "../Routes/AppRoutes";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar amount={5} />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};
