import { BrowserRouter, Routes, Route } from "react-router-dom";
import TwitterPage from "@/pages/twitter/pages/TwitterPage";
import FacebookPage from "@/pages/facebook/pages/FacebookPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TwitterPage />} />
        <Route path="/twitter" element={<TwitterPage />} />
        <Route path="/facebook" element={<FacebookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
