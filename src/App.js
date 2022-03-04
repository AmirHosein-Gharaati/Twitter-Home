import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Home />
        <div className="right-side"></div>
      </div>
    </div>
  );
}

export default App;
