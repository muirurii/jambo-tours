import Header from "./components/Layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/Pages/Home";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
