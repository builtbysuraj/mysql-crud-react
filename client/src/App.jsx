import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Create";
import Read from "./Read";
import Edit from "./Edit";
import Error from "./Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:Id" element={<Read />} />
        <Route path="/edit/:Id" element={<Edit />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
