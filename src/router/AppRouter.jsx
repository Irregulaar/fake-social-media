import { BrowserRouter, Routes, Route } from "react-router-dom";
import TwitterPage from "@/pages/twitter/pages/TwitterPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TwitterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
