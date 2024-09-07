"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar({ sidebaropen, onStateChange }) {
  const sidebarClass = "w-0 hidden ";
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out${
          sidebaropen === "open" ? " w-[65vw] block" : sidebarClass
        } absolute h-screen bg-white z-10`}
      >
        <button
          className=" mt-8 ml-5"
          onClick={() => {
            onStateChange("close");
          }}
        >
          <Image
            className=" w-4 h-4"
            src={"/images/icon-close.svg"}
            width={10}
            height={10}
            alt="close_icon"
          />
        </button>
        <div className=" flex flex-col gap-5 ml-6 mt-14 text-black font-bold text-xl">
          <Link href={"/"}>Collections</Link>

          <Link href={"/"}>Men</Link>

          <Link href={"/"}>Women</Link>

          <Link href={"/"}>About</Link>

          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </>
  );
}
