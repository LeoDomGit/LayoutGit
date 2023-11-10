import React, { useEffect, useState } from "react";
import "../css/login.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Swal from "sweetalert2";
function Login() {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="bx bx-user-circle text-light"></i>
                </div>
                <h3 className="text-center mb-4">Sign In</h3>
                <div className="login-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="form-group d-flex">
                    <input
                      type="password"
                      className="form-control rounded-left"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-md text-center">
                    <button className="ms-4 btn btn-warning rounded">
                      {" "}
                      <i className="bx bxl-gmail"></i> Gmail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
