import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Jobsfeed from "./pages/JobsFeed";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/jobsfeed" element={<Jobsfeed />} />
      </Routes>
    </div>
  );
}

export default App;
