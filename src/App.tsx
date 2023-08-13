import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="border shadow p-4 rounded max-w-lg mx-auto mt-56 capitalize text-center bg-blue-400 font-bold text-white"
      >
        hello this is my ecommerce website {count}
      </button>
    </>
  );
}

export default App;
