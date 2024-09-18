"use client";
import { useState } from "react";
import Image from "next/image";

export default function Lightbox({
  set_pic_no,
  pic_no,
  setLightBox_Open,
  lightbox,
}) {
  function lightbox_viewer(id) {
    set_pic_no(id);
    setinx(id);
  }
  const [inx, setinx] = useState(0);
  const indexthing = (type) => {
    let index = 0;
    if (type === "next") {
      index = (inx + 1) % lightbox.length;
    } else if (type === "prev") {
      index = (inx - 1 + lightbox.length) % lightbox.length;
    }
    setinx(index);
  };
  return (
    <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-40 ">
      <div className=" float-right -translate-x-2 -translate-y-3  ">
        <button
          className="close"
          onClick={() => {
            setLightBox_Open(0);
          }}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-full flex flex-col justify-center ">
        <div className=" absolute -left-[3%] top-[50%] -translate-y-[170%] z-50  ">
          <button
            onClick={() => {
              indexthing("prev");
            }}
            className="w-fit h-fit bg-white py-2  px-3 rounded-full"
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className=" flex  justify-center ">
          <Image
            className=" rounded-xl"
            src={lightbox[inx].url}
            width={400}
            height={400}
            alt="main lightbox"
            priority={true}
          />
        </div>
        <div className="absolute -right-[2%] top-[50%] -translate-y-[171%] z-50 ">
          <button
            onClick={() => {
              indexthing("next");
            }}
            className="w-fit h-fit bg-white py-2  px-[10px] rounded-full"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className=" flex flex-row gap-10 justify-center mt-10 relative ">
          {lightbox.map((lb) => (
            <button
              key={lb.id}
              onClick={() => {
                lightbox_viewer(lb.id);
              }}
            >
              <div>
                <Image
                  className=" rounded-lg  cursor-pointer relative"
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
    </div>
  );
}
