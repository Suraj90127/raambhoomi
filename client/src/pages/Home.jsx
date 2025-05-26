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
      <div className="absolute inset-0 z-10 flex items-center justify-cente">
        <div className="flex space-x-2 text-6xl font-bold text-orange-600">
          <motion.span
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            R
          </motion.span>
          <motion.span
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          >
            M
          </motion.span>
          <motion.span
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
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
          initial={{ scale: 0 }}
          animate={{ scale: [1.2, 1, 1.2, 1] }}
          transition={{ duration: 2 }}
        />
      )}
    </div>
  );
};

export default Home;
