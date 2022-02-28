import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const RouteSwitch = () => {
	return (
		<BrowserRouter basename='/cv-application/'>
            <Routes>
                <Route index element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;
