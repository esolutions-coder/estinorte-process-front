import {Route, Routes } from "react-router-dom";
//PAGES
import Home from "../src/pages/start";
import Centers from "./pages/centers";
import CreateProcess from "./pages/createProcess";
import DetailedProcess from "./pages/detailedProcess";
import ProcessByCenter from "./pages/processByCenter";
import ProcessList from "./pages/processList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/centros" element={<Centers />} />
        <Route path="/proceso/:process_id" element={<DetailedProcess />} />
        <Route path="/listar/procesos/" element={<ProcessList />} />
        <Route path="/crear/proceso/" element={<CreateProcess />} />
        <Route path="/listar/centro/:centerId/procesos" element={<ProcessByCenter />} />
      </Routes>
    </div>
  );
}

export default App;
