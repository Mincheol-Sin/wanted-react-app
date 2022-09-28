import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Jobsfeed from "./pages/JobsFeed";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/jobsfeed" element={<Jobsfeed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
