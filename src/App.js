import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/Pricing" element={Pricing} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
