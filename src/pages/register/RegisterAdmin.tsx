import React from "react";
import { connect } from "react-redux";
import { Header } from "../home/screens/Header";

export const RegisterAdmin = (props: any) => {
  return (
    <div>
      <h2 style={{ margin: 10 }}>
        Función no disponible, contacta al administrador{" "}
        <a
          target="_blank"
          className="text-dark"
          href="https://github.com/felipeacx"
        >
          FelipeACX
        </a>
      </h2>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAdmin);
