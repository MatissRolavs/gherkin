import Translations from "./components/Translations";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <Translations />
      </div>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <Question1 />
      </div>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <Question2 />
      </div>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <Question3 />
      </div>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <Question4 />
      </div>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <Question5 />
      </div>
    </div>
  );
}

export default App;
