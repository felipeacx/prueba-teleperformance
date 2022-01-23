import React from "react";
import { Outlet } from "react-router";
import { Loading } from "../../components/Loading";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Home = (props: any) => {
  return (
    <div>
      <Header />
      {props.loading && <Loading />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
