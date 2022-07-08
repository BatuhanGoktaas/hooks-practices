import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import UseStatePage from "../pages/UseStatePage";
import UseEffectPage from "../pages/UseEffectPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UseStatePage />} />
      <Route path="/use-effect" element={<UseEffectPage />} />
    </Routes>
  );
};

export default Router;
