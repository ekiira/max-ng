import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// style
import style from "./Login.module.css";

// images
import Spaceship from "../images/undraw_To_the_stars_qhyy.svg";
import Flag from "../images/undraw_Astronaut_xko2.svg";

const Login = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onChangeHandler = (event, handler) => {
    handler(event.target.value);
  };

  useEffect(() => {
    if (email && password) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [email, password]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password.match(/^(?=.*\d).{8,}$/)) {
      setEmail("");
      setPassword("");
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className="row mx-0">
        <div className={`col-lg-4 pr-0`}>
          <div className={`row ${style.left}`}>
            <div className="container">
              <div
                className={`col-md-12 h-100 d-flex justify-content-center align-items-center text-center ${style.banner}`}
              >
                <div>
                  <div className={` ${style.left_intro}`}>
                    <p className="font-weight-bold text-left">
                      Welcome to Star Wars
                      <br /> the Clone Wars
                    </p>
                  </div>
                  <div className="pt-5">
                    <img
                      src={Spaceship}
                      className="img-fluid"
                      alt="spaceship logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.black_box}`}>
              <div className={`${style.black_box}`}></div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className={`row ${style.mid}`}>
            <div className="container">
              <div
                className={`col-md-12  d-flex justify-content-center align-items-center text-center ${style.mid_banner}`}
              >
                <div>
                  <div className={`pb-4 ${style.mid_intro}`}>
                    <p className="font-weight-bold text-left">
                      Sign in to continue to
                      <br /> your account.
                    </p>
                  </div>

                  <div className={`pt-3 ${style.form}`}>
                    <Form onSubmit={onFormSubmit}>
                      <Form.Group controlId="formEmail" className="pb-3">
                        <Form.Label className="text-left d-flex">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => onChangeHandler(e, setEmail)}
                        />
                      </Form.Group>

                      <Form.Group controlId="formPassword">
                        <Form.Label className="text-left d-flex">
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter strong password"
                          value={password}
                          onChange={(e) => onChangeHandler(e, setPassword)}
                        />

                        {error ? (
                          <Form.Text className="text-muted">
                            Your passwword must contain at least 8 characters,
                            including a number
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <div className="pt-3">
                        {activeButton ? (
                          <Button variant="dark" type="submit" block>
                            Sign in
                          </Button>
                        ) : (
                          <Button variant="dark" type="submit" block disabled>
                            Sign in
                          </Button>
                        )}
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`col-lg-3 d-none d-lg-block`}>
          <div className={`row ${style.right}`}>
            <div className="container">
              <div
                className={`col-md-12 h-100  d-flex justify-content-end align-items-start text-center ${style.banner}`}
              >
                <div>
                  <div className={`pt-5 ${style.right_intro}`}>
                    <img src={Flag} className="img-fluid" alt="flag"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
