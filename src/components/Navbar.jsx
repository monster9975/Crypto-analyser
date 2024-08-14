import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../FEATURES/Auth/AuthSlice";

const Navbar = () => {

  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };


  
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} className="crypto-detective">Crypto-Detective </Link>
        </Typography>
        {user ? (
          <>
            <Link to={"/cart"}>
              <Badge badgeContent={cartItems.length} color="error">
                <Button
                  sx={{ margin: "0 10px" }}
                  variant="contained"
                  color="secondary"
                >
                  {" "}
                  cart
                  <ShoppingCartRoundedIcon />
                </Button>
              </Badge>
            </Link>
            <Button
              sx={{ margin: "0 10px" }}
              variant="contained"
              color="error"
              onClick={handleLogOut}
            >
              {" "}
              logout
              <ShoppingCartRoundedIcon />
            </Button>
          </>
        ) : (
          <>
            <Link to={"/register"}>
              <Button
                sx={{ margin: "0 10px" }}
                variant="contained"
                color="success"
              >
                Register
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button
                sx={{ margin: "0 10px" }}
                variant="contained"
                color="warning"
              >
                login
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
