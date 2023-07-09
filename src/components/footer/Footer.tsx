import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Avatar, Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LinkThreeLogo from '../../assets/img/linktree-logo-icon.svg'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box
            style={{
              backgroundColor: "#d6dde2",
              height: "",
              color: "#2d5540",
              paddingTop: "15px",
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/EscolaDaNuvemOficial/" target="_blank">
                <FacebookIcon style={{ fontSize: 60, color: "#041433" }} />
              </a>
              <a href="https://www.instagram.com/escola_da_nuvem/" target="_blank">
                <InstagramIcon style={{ fontSize: 60, color: "#041433" }} />
              </a>
              <a href="https://www.linkedin.com/company/escola-da-nuvem/" target="_blank">
                <LinkedInIcon style={{ fontSize: 60, color: "#041433" }} />
              </a>

            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: "#d6dde2",
              height: "",
              paddingBottom: "12px",
            }}
          >
            <Box paddingTop={0.2}>
              <Typography
                variant="subtitle2"
                align="center"
                style={{ color: "inherit" }}
              >
                © 2023 Copyright.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
