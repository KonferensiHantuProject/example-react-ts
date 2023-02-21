import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-300">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
