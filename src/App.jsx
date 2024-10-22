import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  // option 01
  function handleClick() {
    alert("button clicked");
  }

  //option 2
  const handle = () => {
    alert("clicked");
  };
  return (
    <>
      <h3>React Core Concepts Part2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me </button>
      <button onClick={handle}>Button Clicked</button>
      <button
        onClick={() => {
          alert("button is clicked here");
        }}
      >
        Clicked
      </button>
    </>
  );
}

export default App;
