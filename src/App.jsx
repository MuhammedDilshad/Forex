import "./App.css";
import cover from "./Images/hans.jpg";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${cover})` }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
