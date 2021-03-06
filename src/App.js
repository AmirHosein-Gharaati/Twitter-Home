import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import dummyData from "./data/data.json";
import RightSide from "./components/RightSide";
import LoadingPage from "./components/LoadingPage";
import { useState } from "react";

function App() {
  const [ready, setReady] = useState(false);

  document.onreadystatechange = () => {
    // Used timeout to just show animation
    setTimeout(() => {
      setReady(!ready);
    }, 1000);
  };

  return !ready ? (
    <LoadingPage />
  ) : (
    <div>
      <Navbar />
      <div id="main">
        <Home dummyData={dummyData} />
        <RightSide dummyData={dummyData} />
      </div>
    </div>
  );
}

export default App;
