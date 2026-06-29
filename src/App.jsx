import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin@12345" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
