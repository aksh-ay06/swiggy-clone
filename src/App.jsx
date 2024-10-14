import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import toastify styles

function App() {
  const [user, setUser] = useState({
    name: 'Akshay Patel',
    email: 'akshaytest2806@gmail.com',
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <div className="app-container">
          <Header />
          <div className="content-container">
            <Outlet /> {/* This will render your page content */}
          </div>
          <Footer />
          {/* Add ToastContainer here */}
          <ToastContainer 
            position="top-right"
            autoClose={3000} 
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
