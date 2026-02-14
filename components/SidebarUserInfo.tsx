"use client";

import { Menu, MenuItem } from "@mui/material";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/firebase";
import { closeLogInModal, closeSignUpModal } from "@/redux/slices/modalSlice";
import { signOutUser } from "@/redux/slices/userSlice";
import type { AppDispatch, RootState } from "@/redux/store";

const SidebarUserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleSignOut = async () => {
    await signOut(auth);

    dispatch(signOutUser());
    dispatch(closeSignUpModal());
    dispatch(closeLogInModal());

    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="absolute bottom-3 flex items-center gap-2 hover:bg-gray-500/10 xl:p-3 xl:pr-6 rounded-full transition cursor-pointer w-fit xl:w-60"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={"/assets/profile-pic.png"}
          width={36}
          height={36}
          alt="Profile Picture"
          className="w-9 h-9"
        />

        <div className=" hidden items-start flex-col text-sm xl:flex max-w-40">
          <span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden">
            {user.name}
          </span>

          <span className="text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden">
            @{user.username}
          </span>
        </div>
      </button>

      <Menu open={isOpen} onClose={() => setIsOpen(false)}>
        <MenuItem onClick={handleSignOut}>Log out</MenuItem>
      </Menu>
    </>
  );
};

export default SidebarUserInfo;
