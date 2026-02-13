"use client";

import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeLogInModal, openLogInModal } from "@/redux/slices/modalSlice";
import type { AppDispatch, RootState } from "@/redux/store";

const LogInModal = () => {
  const [showPassword, setShowPassword] = useState(false);

  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        className="w-full h-12 md:w-22 md:h-10 text-md md:text-sm border-2 border-gray-100 rounded-full text-white font-bold hover:bg-white/25 transition"
        onClick={() => dispatch(openLogInModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full bg-white sm:w-150 sm:h-fit sm:rounded-xl">
          <button
            type="button"
            className="w-7 mt-5 ms-5 cursor-pointer"
            onClick={() => dispatch(closeLogInModal())}
          >
            <XMarkIcon />
          </button>

          <form action="" className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Log in to Busy Bee</h1>

            <div className="w-full space-y-5 mb-10">
              <input
                type="email"
                className="w-full h-13.5 border border-gray-200 outline-none pl-3 rounded focus:border-[#f4af01] transition"
                placeholder="Email"
              />

              <div className=" flex items-center w-full h-13.5 border border-gray-200 rounded focus-within:border-[#f4af01] transition pr-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-full outline-none pl-3"
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
              className="bg-[#f4af01] text-white h-12 rounded-full shadow-md mb-5 w-full"
            >
              Log In
            </button>

            <span className="mb-5 text-sm text-center block">Or</span>

            <button
              type="button"
              className="bg-[#f4af01] text-white h-12 rounded-full shadow-md mb-5 w-full"
            >
              Log In as Guest
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LogInModal;
