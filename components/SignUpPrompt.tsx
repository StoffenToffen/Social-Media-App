"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import LogInModal from "./modals/LogInModal";
import SignUpModal from "./modals/SignUpModal";

const SignUpPrompt = () => {
  const name = useSelector((state: RootState) => state.user.name);

  return (
    !name && (
      <div className="fixed w-full h-20 bg-[#f4af01] bottom-0 flex justify-center items-center gap-5 lg:justify-between lg:px-20 xl:px-40 2xl:px-80">
        <div className="hidden flex-col text-white md:flex">
          <span className="text-xl font-bold">Don't miss out on the buzz</span>

          <span>People on Busy Bee are always the first to know.</span>
        </div>

        <div className="flex gap-2 w-full p-3 md:w-fit">
          <LogInModal />

          <SignUpModal />
        </div>
      </div>
    )
  );
};

export default SignUpPrompt;
