import Hero from "./components/Hero";
import Header from "./components/Layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}>
            
          </Route>
          <Route path="/destinations" element={<h1>hh          </h1>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
