import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import Logo from "../../assets/img/logos/Amazon-Web-Services-AWS-Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  return (
    <>
      <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ paddingBottom:"40px" }}
            >
                <Grid alignItems="center" item xs={6}>
                    <Box padding="60px 0 0 160px">
                        <Typography
                            variant="h6"
                            gutterBottom
                            color="textPrimary"
                            component="p"
                            align="center"
                        >
                           O futuro da cloud 
                        </Typography>
                        <Typography
                            variant="h6"
                            gutterBottom
                            color="textPrimary"
                            component="p"
                            align="justify"
                            style={{ marginTop: "20px"}}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit voluptatem eius at dolore perferendis deleniti fuga! Nostrum, hic. Cum nulla consequatur quia a. Saepe aliquid delectus voluptate, eius neque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam expedita dolorem fugit beatae natus mollitia quibusdam adipisci inventore! Enim, laborum et. Vitae, officiis atque molestias repudiandae delectus quasi voluptas sed.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ padding: "30px 0 30px 0" }}>
                   <Box display="flex" justifyContent="center" width="100%"><img width="500px" src={Logo} alt="Logo do home" /></Box> 
                </Grid>
                <Grid xs={12}></Grid>
            </Grid>
    </>
  );
}

export default Home;
