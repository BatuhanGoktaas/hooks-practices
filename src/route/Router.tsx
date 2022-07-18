import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import UseStatePage from "../pages/UseStatePage";
import UseEffectPage from "../pages/UseEffectPage";
import UseContextPage from "../pages/UseContextPage";
import UseRefPage from "../pages/UseRefPage";
import UseCallbackPage from "../pages/UseCallbackPage";
import UseReducerPage from "../pages/UseReducerPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UseStatePage />} />
      <Route path="/use-effect" element={<UseEffectPage />} />
      <Route path="/use-context" element={<UseContextPage />} />
      <Route path="/use-ref" element={<UseRefPage />} />
      <Route path="/use-callback" element={<UseCallbackPage />} />
      <Route path="/use-reducer" element={<UseReducerPage />} />
    </Routes>
  );
};

export default Router;
