import { styled } from "@mui/material";

const MainDiv = styled("div")({
  height: "100vh",
  fontSize: "25px",
  textAlign: "center",
});

const Home = () => {
  return (
    <div>
      <MainDiv>
        <div>
          <h1>Welcome</h1>
          <p>This platform is dedicated to provide quick crime reporting to nearby Police Station to empower communities to stay safe and informed. Through cutting-edge technology and data analysis, we aim to create a safer environment for all.</p>
        </div>
      </MainDiv>
    </div>
  );
};

export default Home;
