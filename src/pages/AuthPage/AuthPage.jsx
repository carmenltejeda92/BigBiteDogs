import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css'

function AuthPage() {
  return<div className="auth">
      <div>
        <SignUpForm />
        <LoginForm />
      </div>
      <div>
        <p>Big Bite Dogs</p>
        <div className="img"></div>
      </div>
  </div>;
}

export default AuthPage;
