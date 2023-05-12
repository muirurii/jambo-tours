import Header from "./components/Layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/Pages/Home";
import Footer from "./components/Layout/Footer";
import Gallery from "./components/Pages/Gallery";
function App() {
  return (
    <div className="bg-white text-primary overflow-x-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            
          </Route>
          <Route path="/destinations" element={<h1>hh          </h1>}>
            
          </Route>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
