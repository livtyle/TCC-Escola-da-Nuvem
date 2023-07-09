import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Avatar, Box } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logos/logoEscola.png";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  return (
    <>
      <AppBar
        className="header"
        position="static"
        style={{ backgroundColor: "#d6dde2", color: "#041433" }}
      >
        <Toolbar variant="dense">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Link to={"/home"}>
              <Box style={{ cursor: "pointer" }}>
                <Typography variant="h5" color="inherit">
                  <img height={100} src={Logo} alt="" />
                </Typography>
              </Box>
            </Link>

            <Box display="flex" justifyContent="start">
              <>
                <NavLink
                  className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                  to="/home"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                      Home
                    </Typography>
                  </Box>
                </NavLink>


                <NavLink
                  className={({ isActive }) => isActive ? 'isActiveNav' : 'linkNavbarBorder'}
                  to="/sobre"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  <Box mx={1} className="linkNavbar" style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                      Sobre
                    </Typography>
                  </Box>
                </NavLink>

              </>


            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
