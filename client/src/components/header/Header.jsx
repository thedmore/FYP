import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

const Component = styled(AppBar)`
  position: static;
  background: #7c91eb;
`;
const Component1 = styled(AppBar)`
  position: static;
  background: white;
`;
const Component2 = styled(AppBar)`
  position: static;
  background: #a3e6cd;
`;

const Container = styled(Toolbar)`
  & > a {
    padding: 0 40px;
    color: white;
    font-size: 18px;
    text-decoration: none;
    text-transform: none;
  }
`;

const KsgLOGO = styled("img")({
  width: "40px",
  height: "40px",
});

const DIV = styled("div")({
  width: "200vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
});

const InnerDiv = styled(Typography)`
  margin-top: -22px;
  & > p {
    font-size: 10px;
    margin-top: -26px;
  }
`;

const Header = () => {
  const ksgURL =
    "https://ksp.karnataka.gov.in/frontend/opt1/images/center_logo/kar_main_logo.png";

  return (
    <>
      <Component2>
        <Container>
          <Container maxWidth="sm">
            <Typography style={{ color: "red" }}>
              Emergency Number: 112
            </Typography>
            <Box>Kannada</Box>
          </Container>

          <Container maxWidth="sm">{/* <Translate /> */}</Container>
        </Container>
      </Component2>

      <Component1>
        <Container>
          {/* <Typography>Hello</Typography> */}
          <img src="" alt="our logo" style={{ border: "2px solid black" }} />
          <DIV>
            <KsgLOGO src={ksgURL} alt="ksg logo" />
            <InnerDiv>
              <h5>Karnataka State Police</h5>
              <Typography>Government of Karnataka</Typography>
            </InnerDiv>
          </DIV>
          <Container maxWidth="sm" style={{ color: "#212121" }}>
            Sirigannadam gelge
          </Container>
        </Container>
      </Component1>

      <Component>
        <Container>
          <Button component={NavLink} to="/">
            <HomeIcon />
          </Button>
          <Button component={NavLink} to="/about-us">
            About Us
          </Button>
          <Button component={NavLink} to="/faq">
            FAQ
          </Button>
          <Button component={NavLink} to="/contact-us">
            Contact Us
          </Button>
          <Button component={NavLink} to="/govt-organization">
            Government Organization
          </Button>
          <Button component={NavLink} to="/signup">
            Create Account
          </Button>
          <Button component={NavLink} to="/login">
            File Complaint
          </Button>
          <Button component={NavLink} to="/login">
            Login/Register
          </Button>
        </Container>
      </Component>
    </>
  );
};

export default Header;
