import './App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import PortfolioPage from "./MainPage/PortfolioPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/portfolio/*" element={<PortfolioPage />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
