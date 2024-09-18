"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";
const lightbox = [
  {
    id: 0,
    name: "img1",
    url: "/images/image-product-1.jpg",
  },
  {
    id: 1,
    name: "img2",
    url: "/images/image-product-2.jpg",
  },
  {
    id: 2,
    name: "img3",
    url: "/images/image-product-3.jpg",
  },
  {
    id: 3,
    name: "img4",
    url: "/images/image-product-4.jpg",
  },
];
export default function Showcase() {
  const [lightbox_open, setLightBox_Open] = useState(0);
  const [pic_no, set_pic_no] = useState(0);
  function handleImageClick(id) {
    console.log("Image ID:", id);
    setLightBox_Open(1);
    set_pic_no(id);
    console.log(pic_no);
  }

  return (
    <div className="hidden md:block">
      <div className="w-full h-full flex flex-col justify-center ">
        <div className=" flex  justify-center ">
          <Image
            className=" rounded-xl"
            src={"/images/image-product-1.jpg"}
            width={400}
            height={400}
            alt="main lightbox"
          />
        </div>
        <div className=" flex flex-row gap-10 justify-center mt-10 relative ">
          {lightbox.map((lb) => (
            <button
              key={lb.id}
              onClick={() => {
                handleImageClick(lb.id);
              }}
            >
              <div>
                <Image
                  className=" rounded-lg  border-2 cursor-pointer relative"
                  src={lb.url}
                  width={100}
                  height={100}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  alt="lightbox"
                />
                <div className=" absolute bg-white translate-x-[1px] translate-y-[1px] w-[68px] h-[68px] top-0 rounded-lg hover:border-orange-700 border-2  opacity-0 hover:opacity-60 cursor-pointer "></div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {lightbox_open === 0 ? (
        ""
      ) : (
        <div>
          <Lightbox
            lightbox_open={1}
            setLightBox_Open={setLightBox_Open}
            lightbox={lightbox}
            pic_no={pic_no}
            set_pic_no={set_pic_no}
          />
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#000000] opacity-80 z-10 "></div>
        </div>
      )}
    </div>
  );
}
