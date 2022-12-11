import "./App.css";
import Header from "./components/Header";
import Weather from "./pages/Weather";

function App() {
  return (
    <div className="App flex">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
