import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import About from "../mainPage/About";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Container>
        <h1 style={{ fontSize: "1.2rem", marginTop: "3rem" }}>
          Login to MONEZ 💰
        </h1>
        <Link href="/signup">or create an account</Link>
        <Exp for="email">
          <b>
            Email <Span>(or Username)</Span>
          </b>
        </Exp>
        <Input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        ></Input>

        <Exp for="psw">
          <b>Password</b>
        </Exp>
        <Input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></Input>
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
        <Btn href="!#">
          <Image
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg"
            alt="google-logo"
          ></Image>
          Log in with google
        </Btn>
      </Container>
      <About />
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15rem;
`;
const Link = styled.a`
  padding-bottom: 1rem;
  color: #298fca;
  text-align: start;

  :hover {
    color: hsl(0, 0%, 60%);
  }
`;
const Exp = styled.label`
  color: hsl(0, 0%, 60%);
`;
const Span = styled.span`
  color: hsl(0, 0%, 70%);
`;

const Input = styled.input`
  background: #edeff0;
  border-radius: 4px;
  border: 1px solid #cdd2d4;
  border-color: #b6bbbf;
  padding: 0.5em;
  width: 25%;
  margin-bottom: 1rem;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80%;
  }
`;

const Button = styled.button`
  display: inline-block;
  width: 26.5%;
  padding-bottom: 1rem;
  text-align: center;
  background: #61bd4f;
  border-style: none;
  cursor: pointer;
  color: white;
  border-radius: 3.4px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1.3px;
  margin-bottom: 1rem;

  :hover {
    background: #4b9e3b;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 84%;
  }
`;

const Btn = styled.a`
  color: rgba(0, 0, 0, 0.54);
  display: inline-block;
  width: 24.5%;
  text-align: center;
  border-radius: 2.2px;
  border: 2px solid #cdd2d4;
  font-size: 14px;
  padding: 0.6rem;
  font-weight: 550;
  color: #4d4d4d;
  text-decoration: none;

  :hover {
    opacity: 0.86;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 78%;
  }
`;
const Image = styled.img`
  display: block;
  padding-right: 1px;
  float: left;
`;
