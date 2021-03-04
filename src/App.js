import Header from "./components/Header";
import "./App.css";
import Car from "./components/Car";

function App() {
  return (
    <div className="App">
      <div className="app_continer">
        {" "}
        <Car />
      </div>

      <Header />
    </div>
  );
}

export default App;
