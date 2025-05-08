import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6UGn_cNw6O7TfgSzOqCX1Sg895Y5w4MI",
  authDomain: "caran-gym-equipment.firebaseapp.com",
  projectId: "caran-gym-equipment",
  storageBucket: "caran-gym-equipment.firebasestorage.app",
  messagingSenderId: "773274794599",
  appId: "1:773274794599:web:862d6d3e5e70b51e46f2c2"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,


)
