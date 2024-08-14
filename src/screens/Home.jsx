import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css"
import Sharify from "sharify"

const Home = () => {

  
  return (
    <div className="flex">
      <div className="left-compo">
        <motion.h1
          className="track-crypto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
            repeatType: "mirror",
          }}
        >
          TRACK-CRYPTO
        </motion.h1>
        <motion.h1
          className="track-real"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          REAL TIME
        </motion.h1>
        <motion.p
          className="p"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3,
            // repeat: Infinity,
            delay: 0.5,
            repeatType: "mirror",
          }}
        >
          TRACK & ADD Fav Crypto, For more details click on dashboard. THANK YOU{" "}
          <br /> 👇👇👇👇
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 3,
            delay: 0.5,
            // repeat: Infinity,
            // repeatType: "mirror",
          }}
        >
          <Link to={"/dashboard"}>
            <Button variant="contained">DASHBOARD</Button>
          </Link>
          {/* <Button variant="contained" color="success" >
            SHARE{" "}
          </Button> */}
        </motion.div>
      </div>
    </div>
  );
};



export default Home;
