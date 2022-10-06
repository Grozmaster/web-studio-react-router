import './App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactsPage from "./Pages/ContactsPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/portfolio" element={<PortfolioPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
