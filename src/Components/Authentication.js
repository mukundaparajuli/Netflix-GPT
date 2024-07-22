import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  checkValiditySignIn,
  checkValiditySignUp,
} from "../Utils/CheckValidity";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../Utils/Constants";

const Authentication = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const handleSignInSignUp = () => {
    setIsSignedIn(!isSignedIn);
  };
  const handleAuthentication = () => {
    const message = name
      ? checkValiditySignUp(
        name?.current?.value,
        email?.current?.value,
        password?.current?.value
      )
      : checkValiditySignIn(email?.current?.value, password?.current?.value);
    setErrorMessage(message);

    if (message !== null) return;
    if (!isSignedIn) {
      // logic for signing up
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.Message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      );
    }
  };
  return (
    <div>
      <img
        className="bg-cover object-cover h-screen md:w-[100%] absolute"
        src={BG_IMAGE}
        alt="BackgroundImage"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute">
        <Header />
      </div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="w-[90%] md:w-3/12 bg-black h-auto rounded-lg opacity-90">
          <h1 className="text-white text-4xl font-semibold p-3 mx-3 my-2">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignedIn && (
            <input
              className="p-3 m-5 w-5/6 bg-gray-600 rounded-md text-white"
              type="text"
              ref={name}
              name="name"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-3 m-5 w-5/6 bg-gray-600 rounded-md text-white"
            type="email"
            ref={email}
            name="email"
            placeholder="Email Address"
          />
          <input
            className="p-3 m-5 w-5/6 bg-gray-600 rounded-md text-white"
            type="password"
            ref={password}
            name="email"
            placeholder="Password"
          />
          <p className="text-red-600 font-semibold text-lg mx-5">
            {errorMessage}
          </p>
          <button
            className="p-3 m-5 w-5/6 bg-red-600 text-white font-semibold rounded-md"
            onClick={handleAuthentication}
          >
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
