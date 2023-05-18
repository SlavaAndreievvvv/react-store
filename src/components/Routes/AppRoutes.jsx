import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { ROUTES } from "../../utils/routes";
import { SingleProduct } from "../Products/SingleProduct";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  );
};
