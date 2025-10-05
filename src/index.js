import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Enroll from './components/Enroll.js';
import ErrorPage from './components/Errorpage.js';
import Main from './components/Main.js';
import './css/index.css';

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