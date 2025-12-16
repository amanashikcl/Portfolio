import Header from "./components/Header";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";
import Home from "./pages/Home";

function App() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Home />
        </div>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
