import logo from "./logo.svg";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <MultiStepForm />
      </header>
    </div>
  );
}

export default App;
