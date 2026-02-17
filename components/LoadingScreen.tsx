"use client";

import { LinearProgress } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const LoadingScreen = () => {
  const isOpen = useSelector(
    (state: RootState) => state.loading.loadingScreenOpen,
  );

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/assets/busybee-logo2.png"
          width={120}
          height={120}
          alt="Busy Bee Logo"
          className="mb-5"
        />

        <h1 className="text-6xl font-bold mb-10">
          Busy <span className="text-[#f4af01]">Bee</span>
        </h1>

        <LinearProgress
          sx={{
            width: 265,
            height: 10,
            backgroundColor: "#f4af01",
            "& .MuiLinearProgress-bar": { backgroundColor: "black" },
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
