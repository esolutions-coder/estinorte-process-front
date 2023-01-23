import { Link, Route, Routes } from "react-router-dom";
//PAGES
import Home from "../src/pages/start";
import Procesos from "./pages/procesos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procesos/:process_id" element={<Procesos />} />
      </Routes>
    </div>
  );
}

export default App;
