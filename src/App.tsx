import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Games from "./pages/Games";
import GirlTalk from "./pages/Girl_Talk";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/girl-talk" element={<GirlTalk />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
