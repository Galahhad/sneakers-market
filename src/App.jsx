import Image from "./components/Image";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Image />
      <div className="wrapper">
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
