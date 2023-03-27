import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Maintenance from "./components/maintenance/Maintenance";
import HouseHoldThings from "./components/householdthings/HouseHoldThings";
import MedicalFacilities from "./components/medicalfacilities/MedicalFacilities";
import SignUp from "./components/signup/SignUp";


function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="Maintenance" element={<Maintenance />}></Route>
          <Route path="HouseHoldThings" element={<HouseHoldThings />}></Route>
          <Route
            path="MedicalFacilities"
            element={<MedicalFacilities />}
          ></Route>
          <Route path="SignUp" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
`;
