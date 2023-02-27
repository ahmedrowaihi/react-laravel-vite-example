import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./routes/Home";
import Auth from "./routes/Auth";
import { Route, Routes } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img
                        src="assets/vite.svg"
                        className="logo"
                        alt="Vite logo"
                    />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
