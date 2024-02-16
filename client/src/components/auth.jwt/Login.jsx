import { useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const MainDiv = styled("div")({
  height: "100%",
  margin: "80px",
  display: "flex",
});

const Component = styled(Box)`
  width: 450px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "35px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  //   width:
  display: flex;
  flex-direction: column;
  & > div,
  button {
    margin-top: 20px;
  }
  & > p {
    margin-top: 20px;
    text-align: center;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  height: 45px;
`;

const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 45px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

const Login = () => {
  const [account, toggleAccount] = useState("login");

  const imageURL =
    "https://ksp.karnataka.gov.in/frontend/opt1/images/center_logo/kar_main_logo.png";

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const OfficialUseClick = () => {
    window.open("/official-page", "_self");
  };

  return (
    <MainDiv>
      <Component>
        <Box>
          <Image src={imageURL} alt="login" />
          {account === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                name="email"
                label="Enter username"
              />
              <TextField
                variant="standard"
                name="password"
                label="Enter password"
              />

              <LoginButton variant="contained">Login</LoginButton>
              <Text>OR</Text>
              <SignUpButton onClick={() => toggleSignup()}>
                Create an account
              </SignUpButton>
              <Button component={NavLink} to="/official-login">
                Official use
              </Button>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                name="name"
                label="Enter full name"
              />
              <TextField
                variant="standard"
                name="adharNo"
                label="Enter adhar number"
              />
              <TextField
                variant="standard"
                name="mobileNo"
                label="Enter mobile number"
              />
              <TextField
                variant="standard"
                name="email"
                label="Enter mail-id"
              />
              <TextField
                variant="standard"
                name="password"
                label="Enter password"
              />
              <TextField
                variant="standard"
                name="confirmPassword"
                label="Confirm pasword"
              />

              <LoginButton variant="contained">Sign Up</LoginButton>
              <Text>OR</Text>
              <SignUpButton onClick={() => toggleSignup()}>
                Already have an account
              </SignUpButton>
              <Button component={NavLink} to="/official-login">
                Official use
              </Button>
            </Wrapper>
          )}
        </Box>
      </Component>
    </MainDiv>
  );
};

export default Login;
