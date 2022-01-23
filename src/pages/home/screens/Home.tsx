import React, { useEffect } from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
