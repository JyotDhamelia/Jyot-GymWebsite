import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Enroll from './Enroll.js';
import ErrorPage from './Errorpage.js';
import Main from './Main.js';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path='/enroll' element={<Enroll />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoutes />);