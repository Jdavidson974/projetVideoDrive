import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Menubar />
        <div className="container wrap">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/detail" element={<DetailPage />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
