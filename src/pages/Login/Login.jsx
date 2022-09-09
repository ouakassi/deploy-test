import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";
import Section from "../../components/Section";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";

import axios from "../../api/axios";
import Input from "../../components/forms/Input";
const LOGIN_URL = "/auth/login";

export default function Login() {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  useEffect(() => {
    success && navigate("/dashboard");
  }, [success, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.token;
      console.log(JSON.stringify(response?.data));
      console.log(response?.data?.others.email);
      setAuth({
        email: response?.data?.others.email,
        accessToken,
      });
      setEmail("");
      setPassword("");
      setSuccess(true);
      // console.log(auth);
      // navigate("/dashboard");
    } catch (error) {
      if (!error.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Wrong Email or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Not Found or Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <Section
      className="login"
      id="login"
      icon="uil uil-signin"
      sectionTitle="login"
      sectionSubtitle="login to dashboard"
    >
      <div className="login__ui">
        <form onSubmit={handleSubmit} className="login__form">
          <Input
            label="email"
            name="email"
            type="email"
            className="emailInput"
            toRef={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            icon="login__icon uil uil-at"
          />

          <Input
            label="password"
            name="password"
            type="password"
            className="passwordInput"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            icon="login__icon uil uil-key-skeleton-alt"
          />
          <p
            style={{ color: "red", transition: "0.2s" }}
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <ButtonSubmit
            className="button"
            title="Login"
            icon="uil uil-sign-in-alt"
          />
        </form>
      </div>
    </Section>
  );
}
