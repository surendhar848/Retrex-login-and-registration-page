import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Loading from "./Loading/Loading";
import Ent_mail from "./Ent_mail/Ent_mail"
import Login from "./Login/Login";
import Register from "./Register/Register";
import Ent_otp from "./Ent_otp/Ent_otp"
import Ent_new from "./Ent_new/Ent_new"
const RoutePath = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Loading" element={<Loading />} />
          <Route exact path="/Ent_mail" element={<Ent_mail />} />
          <Route exact path="/Ent_otp" element={<Ent_otp />} />
          <Route exact path="/Ent_new" element={<Ent_new />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutePath;
