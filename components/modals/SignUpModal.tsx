"use client";

import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/firebase";
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { signInUser } from "@/redux/slices/userSlice";
import type { AppDispatch, RootState } from "@/redux/store";

const SignUpModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen,
  );
  const dispatch: AppDispatch = useDispatch();

  const handleSignUp = async () => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log(userCredentials);

    await updateProfile(userCredentials.user, {
      displayName: name,
    });

    dispatch(
      signInUser({
        name: userCredentials.user.displayName,
        username: userCredentials.user.email?.split("@")[0],
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
      }),
    );
  };

  const handleGuestLogIn = async () => {
    await signInWithEmailAndPassword(auth, "guest123000@gmail.com", "12345678");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email?.split("@")[0],
          email: currentUser.email,
          uid: currentUser.uid,
        }),
      );
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <button
        type="button"
        className="w-full h-12 md:w-22 md:h-10 text-md md:text-sm font-bold bg-white rounded-full cursor-pointer"
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full bg-white sm:w-150 sm:h-fit sm:rounded-xl">
          <button
            type="button"
            className="w-7 mt-5 ms-5 cursor-pointer"
            onClick={() => dispatch(closeSignUpModal())}
          >
            <XMarkIcon />
          </button>

          <form action="" className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Create your account</h1>

            <div className="w-full space-y-5 mb-10">
              <input
                type="text"
                className="w-full h-13.5 border border-gray-200 outline-none pl-3 rounded focus:border-[#f4af01] transition"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                type="email"
                className="w-full h-13.5 border border-gray-200 outline-none pl-3 rounded focus:border-[#f4af01] transition"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <div className=" flex items-center w-full h-13.5 border border-gray-200 rounded focus-within:border-[#f4af01] transition pr-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-full outline-none pl-3"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <button
                  type="button"
                  className="w-7 h-7 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="bg-[#f4af01] text-white h-12 rounded-full shadow-md mb-5 w-full cursor-pointer"
              onClick={handleSignUp}
            >
              Sign Up
            </button>

            <span className="mb-5 text-sm text-center block">Or</span>

            <button
              type="button"
              className="bg-[#f4af01] text-white h-12 rounded-full shadow-md mb-5 w-full cursor-pointer"
              onClick={handleGuestLogIn}
            >
              Log In as Guest
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default SignUpModal;
