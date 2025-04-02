import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useIntl from "@common/locales";

function App() {
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const { tt } = useIntl();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button
          onClick={() => {
            const curLang = localStorage.getItem("language");
            if (curLang === "en-US") {
              localStorage.setItem("language", "zh-CN");
            } else {
              localStorage.setItem("language", "en-US");
            }
            // window.location.reload();
            setRefresh(!refresh);
          }}
        >
          {tt("button.add")}
        </button>
      </div>
    </>
  );
}

export default App;
