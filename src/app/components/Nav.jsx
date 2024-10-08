"use client";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { GlobalContextProvider, useGlobalContext } from "../store";
import Basket from "./Basket";

export default function Nav() {
  const [sidebaropen, setSidebaropen] = useState("closed");
  const [basket, setbasket] = useState("close");
  const [item_number, setitem_number] = useGlobalContext();
  function setSidebar(id) {
    setSidebaropen(id);
  }
  function setBasket(id) {
    setbasket(id);
  }
  return (
    <>
      <Sidebar sidebaropen={sidebaropen} onStateChange={setSidebar} />

      <Basket basket={basket} />
      <nav className=" flex flex-row justify-between w-full h-10 py-9 px-4 items-center">
        <div className="flex flex-row gap-4 ">
          <button
            className="md:hidden"
            onClick={() => {
              setSidebar("open");
            }}
          >
            <Image
              src={"/images/icon-menu.svg"}
              width={10}
              height={10}
              className="w-4 h-4 "
              alt="menu_svg"
            />
          </button>
          <Link href={"/"}>
            <Image
              src={"images/logo.svg"}
              width={100}
              height={100}
              className="h-6 w-36 -translate-y-[2px]"
              alt="logo"
            />
          </Link>
          <div className="hidden [&>*]:border-b-2 [&>*]:transition [&>*]:ease-in-out [&>*]:duration-[500ms] [&>*]:border-b-white  md:flex flex-row gap-5 ml-10 ">
            <div className=" hover:border-b-orange-500  hover:border-b-2">
              <Link href={"/collections"}>Collections</Link>
            </div>
            <div className=" hover:border-b-orange-500   hover:border-b-2">
              <Link href={"/men"}>Men</Link>
            </div>
            <div className=" hover:border-b-orange-500  hover:border-b-2">
              <Link href={"/women"}>Women</Link>
            </div>
            <div className=" hover:border-b-orange-500  hover:border-b-2">
              <Link href={"/about"}>About</Link>
            </div>
            <div className=" hover:border-b-orange-500  hover:border-b-2">
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className=" h-full relative ">
            <button
              className=" mt-1"
              onClick={() => {
                basket === "close" ? setBasket("open") : setBasket("close");
              }}
            >
              <Image
                src={"/images/icon-cart.svg"}
                width={20}
                height={20}
                className="h-6 w-6"
                alt="cart"
              />
            </button>
            {item_number > 0 ? (
              <div className="absolute text-[9px] top-0 -right-1 z-10 bg-[#ff7d1a] px-[5px] rounded-lg   text-white">
                {item_number}
              </div>
            ) : (
              ""
            )}
          </div>
          <button>
            <Image
              src={"/images/image-avatar.png"}
              width={50}
              height={50}
              className="h-6 w-6 md:h-8 md:w-8"
              alt="avatar"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
