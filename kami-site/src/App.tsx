import './App.css'
import { Hero } from "./components/Hero.tsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';


function App() {
  // Trigger the important toast notification when the app loads
  React.useEffect(() => {
    toast.error("🚨 IMPORTANT: The bot is temporarily disabled due to server cost considerations. We appreciate your understanding as we work on optimizing the service. 🚨", {
      position: "top-center",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "important-toast", // Custom class for extra styling
    });
  }, []);

  return (
    <>
      <Hero />
      <ToastContainer />
    </>
  );
}

export default App;
