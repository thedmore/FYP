import React from "react";
import { useTheme, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" style={{ backgroundColor: "#424242" }}>
      <Typography variant="body2" style={{ color: "#ffebee" }} align="center">
        Copyright © 2024, All Rights Reserved.
      </Typography>
      <Typography variant="body2" style={{ color: "#ffebee" }} align="center">
        Designed, Developed and Hosted by: cec Center for e-Governance - Web
        Portal, Government of Karnataka
      </Typography>
      <Typography variant="body2" style={{ color: "#ffebee" }} align="center">
        Best viewed in Chrome v-87.0.4280.141, Microsoft Edge v-87.0.664.75,
        Firefox -v-83.0 Browsers. Resolution : 1280x800 to 1920x1080
      </Typography>
      <Typography variant="body2" style={{ color: "#ffebee" }} align="center">
        Last Updated : 30-01-2024 03:21 PM
      </Typography>
      <Typography variant="body2" style={{ color: "#ffebee" }} align="center">
        Visitors Counter: 610198
      </Typography>
      <Typography variant="body2" style={{ color: "#ffebee" }} align="center">
        Version: CeG/KRN 1.3
      </Typography>
      <Typography variant="body2" style={{ color: "#ffebee" }} align="center">
        <Link color="inherit" href="#">
          Copyright Policy
        </Link>{" "}
        <Link color="inherit" href="#">
          Terms & Conditions
        </Link>{" "}
        <Link color="inherit" href="#">
          Hyperlinking Policy
        </Link>{" "}
        <Link color="inherit" href="#">
          Privacy Policy
        </Link>{" "}
        <Link color="inherit" href="#">
          Help
        </Link>{" "}
        <Link color="inherit" href="#">
          Security Policy
        </Link>{" "}
        <Link color="inherit" href="#">
          Screen Reader Access
        </Link>{" "}
        <Link color="inherit" href="#">
          Guidelines Visitors
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
