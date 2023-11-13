import React, { useState } from "react";
import Header from "./Header";

const Authentication = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const handleSignInSignUp = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div>
      <img
        className="bg-cover w-[100%] h-[100%] absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/9e7e0ebe-cd77-49ac-8bf3-d1fb691d0ece/NP-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="BackgroundImage"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute">
        <Header />
      </div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="w-3/12 bg-black h-auto rounded-lg opacity-90">
          <h1 className="text-white text-4xl font-semibold p-3 mx-3 my-2">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignedIn && (
            <input
              className="p-3 m-5 w-5/6 bg-gray-600 rounded-md text-white"
              type="text"
              name="name"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-3 m-5 w-5/6 bg-gray-600 rounded-md text-white"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="p-3 m-5 w-5/6 bg-gray-600 rounded-md text-white"
            type="password"
            name="email"
            placeholder="Password"
          />
          <button className="p-3 m-5 w-5/6 bg-red-600 text-white font-semibold rounded-md">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white m-5">
            {isSignedIn ? "Not Registered yet? " : "Already have an account? "}
            <button className="text-red-600" onClick={handleSignInSignUp}>
              {isSignedIn ? "Sign Up" : "Sign In"}
            </button>{" "}
            now!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
