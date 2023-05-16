import { Footer } from "../Footer";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { AppRoutes } from "../Routes/AppRoutes";

export const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};
