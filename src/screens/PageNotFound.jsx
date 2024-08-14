import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const PageNotFound = () => {
  return (
    <Container
      sx={{
        padding: "80px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        404 page not found
      </Typography>
     <Link to={"/"}>
         <Button variant="outlined" color="success">
        Go To Home
      </Button>
     </Link>
    </Container>
  );
};

export default PageNotFound;
