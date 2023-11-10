import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/education" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
