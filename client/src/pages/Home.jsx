import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import raamImg from "../assets/raam.jpg"; // ✅ Use your Ram image
import ayodhyaBg from "../assets/ayodhya.jpg"; // ✅ Use your background image

const Home = () => {
  const [showRamImage, setShowRamImage] = useState(false);
  const [showBgImage, setShowBgImage] = useState(false);

  useEffect(() => {
    // Show Ram image after 2s
    setTimeout(() => {
      setShowRamImage(true);
    }, 2000);

    // Show background image after 4s
    // setTimeout(() => {
    setShowBgImage(true);
    // }, 4000);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar />

      {/* Background Image */}
      {/* {showBgImage && (
        <img
          src={ayodhyaBg}
          alt="Ayodhya Nagri"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )} */}

      {/* Hero Section */}
      <div className="absolute inset-0 flex items-center justify-center  z-[99999]">
        <div className="flex space-x-2 text-6xl font-bold text-orange-600">
          <motion.span
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, stiffness: 220, delay: 0.2 }}
            className="text-9xl font-bold text-orange-600"
          >
            R
          </motion.span>
          <motion.span
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 2, stiffness: 120, delay: 0.2 }}
              className="text-9xl font-bold text-orange-600"
          >
            M
          </motion.span>
          <motion.span
            initial={{ x: "100vw" }}z
            animate={{ x: 0 }}
            transition={{ duration: 2, stiffness: 120, delay: 0.2 }}
              className="text-9xl font-bold text-orange-600"
          >
            G
          </motion.span>
        </div>
      </div>

      {/* Ram Image Animation */}
      {showRamImage && (
        <motion.img
  src={raamImg}
  alt="Lord Ram"
  className="absolute top-1/2 left-1/2 w-48 h-48 z-20 object-contain transform -translate-x-1/2 -translate-y-1/2"
  initial={{ scale: 0.7, opacity: 1 }}
  animate={{
    scale: [0.7, 0.8, 0.9, 1, 1, 1, 1, 0.9, 0.8, 0.7, 0],
    opacity: [0.6, 0.7, 0.8, 1, 1, 1, 1, 0.8, 0.7], // opacity fades smoothly
  }}
  transition={{ duration: 5 }}
/>

      )}
    </div>
  );
};

export default Home;
