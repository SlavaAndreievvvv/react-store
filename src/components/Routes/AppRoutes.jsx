import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
