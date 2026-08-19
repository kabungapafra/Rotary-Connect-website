import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestToJoin from "./pages/RequestToJoin";
import HowToUseApp from "./pages/HowToUseApp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/request-to-join" element={<RequestToJoin />} />
      <Route path="/how-to-use-the-app" element={<HowToUseApp />} />
    </Routes>
  );
}
