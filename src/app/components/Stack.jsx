"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { useGlobalContext } from "../store";
export default function Stack() {
  const [quantity, setquantity] = useState(0);
  const [item_number, setitem_number] = useGlobalContext();
  function quantityFinal(num) {
    let quan = 0;
    if (num === "add") {
      quan = quantity + 1;
      setquantity(quan);
    }
    if (num === "sub" && quantity > 0) {
      quan = quantity - 1;
      setquantity(quan);
    }
  }
  function add_to_cart() {
    setitem_number(quantity);
  }
  return (
    <>
      <div className=" flex flex-row justify-between mt-5">
        <div className=" flex flex-row gap-4 text-[#000000bf] font-extrabold text-2xl">
          <div className="price">${"125.00"}</div>
          <span className="percent bg-black text-white font-semibold  px-3 text-sm rounded-md text-center content-center  ">
            50%
          </span>
        </div>
        <div className="discount line-through text-base text-[#68707d]">
          $250.00
        </div>
      </div>
      <div className=" flex flex-row justify-between text-[#000000bf] font-extrabold bg-[#f7f8fd] my-3 p-2 px-5 rounded-sm">
        <button
          onClick={() => {
            quantityFinal("sub");
          }}
        >
          <Image
            src={"/images/icon-minus.svg"}
            width={15}
            height={15}
            alt="minus"
            style={{
              width:'auto',
              height:'auto'
            }}
            priority={true}
          />
        </button>
        {quantity}
        <button
          onClick={() => {
            quantityFinal("add");
          }}
        >
          <Image
            src={"images/icon-plus.svg"}
            width={15}
            height={15}
            alt="plus"
            priority={true}
          />
        </button>
      </div>
      <button
        onClick={() => {
          add_to_cart();
        }}
        className="flex flex-row  bg-[#ff7d1a] w-full rounded-md justify-center text-[#000000bf] font-extrabold py-3 gap-2"
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#000000bf"
            fillRule="nonzero"
          />
        </svg>
        Add to cart
      </button>
    </>
  );
}
