import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-300">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
