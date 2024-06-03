import { Routes, Route } from "react-router-dom";
import AppLandingPage from "./pages/AppLandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLandingPage />} />
    </Routes>
  );
}

export default App;