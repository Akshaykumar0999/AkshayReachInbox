import './App.css'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import OneBox from './components/OneBox';

const PrivateRoute = ({ element: Element }) => {
  const isLoggedIn = localStorage.getItem('googleToken');
  return isLoggedIn ? <Element /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onebox" element={<PrivateRoute element={OneBox} />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
