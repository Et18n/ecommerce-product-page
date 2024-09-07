"use client";
import { useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const productData = [
    {
      image: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1-thumbnail.jpg",
    },
    {
      image: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2-thumbnail.jpg",
    },
    {
      image: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3-thumbnail.jpg",
    },
    {
      image: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4-thumbnail.jpg",
    },
  ];

  const [inx, setinx] = useState(0);
  const indexthing = (type) => {
    let index = 0;
    if (type === "add") {
      index = (inx + 1) % productData.length;
    } else if (type === "minus") {
      index = (inx - 1 + productData.length) % productData.length;
    }
    setinx(index);
  };
  return (
    <div className="relative">
      <button
        className="absolute left-4 bg-white px-[11px] py-2 rounded-full align-middle top-[50%] -translate-y-[50%] "
        onClick={() => {
          indexthing("minus");
        }}
      >
        <svg
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          className=" -translate-x-[2px]"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <Image
        src={productData[inx].image}
        width={1000}
        height={1000}
        className=" w-full h-64 object-cover  "
        alt="product_image"
        priority={true}
      />
      <button
        className="absolute  bg-white px-[11px] py-2 rounded-full right-4 top-[50%] -translate-y-[50%] "
        onClick={() => {
          indexthing("add");
        }}
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
