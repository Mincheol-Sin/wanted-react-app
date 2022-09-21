import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/jobsfeed" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
