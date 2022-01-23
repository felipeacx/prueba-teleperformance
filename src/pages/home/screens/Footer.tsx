import React from "react";
import { connect } from "react-redux";

export const Footer = (props: any) => {
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom ">
      <div className="text-center p-3">
        ©Copyright 2022 Desarrollado por:{" "}
        <a
          target="_blank"
          className="text-dark"
          href="https://github.com/felipeacx"
        >
          FelipeACX
        </a>
      </div>
    </footer>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
