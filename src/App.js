import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import dummyData from "./data/data.json";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Home dummyData={dummyData} />
        <RightSide dummyData={dummyData}/>
      </div>
    </div>
  );
}

export default App;
