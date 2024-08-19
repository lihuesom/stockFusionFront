import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainView from './app/views/MainView';
import ManagementView from './app/views/ManagementView';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/management" element={<ManagementView />} />
            </Routes>
        </Router>
    );
}

export default App;
