import About from "./components/About";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import LastPart from "./components/LastPart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Feature />
        <LastPart />
      </main>
    </>
  );
};

export default App;
