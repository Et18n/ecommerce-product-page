import Image from "next/image";
import { useGlobalContext } from "../store";
export default function Basket({ basket }) {
  const [item_number, setitem_number] = useGlobalContext();
  const open_or_close = basket === "open" ? "block" : "hidden";
  const Shoe_price = 125;
  function total_price() {
    return (Shoe_price * item_number).toFixed(2);
  }
  function item_delete() {
    if (item_number > 0) {
      setitem_number(item_number - 1);
    }
  }
  return (
    <>
      <div
        className={`${open_or_close} absolute md:w-[350px] text-gray-500  bg-white md:translate-x-96 shadow-2xl  px-5 py-4 rounded-lg w-[96vw]  h-56 z-10 left-[50%] -translate-x-[50%]   top-20`}
      >
        <div className=" font-bold ">Cart</div>
        <hr className=" mt-5 " />
        <div>
          {item_number === 0 ? (
            <div className=" font-bold text-gray-500 absolute top-[50%] left-[50%] -translate-x-[50%] ">
              Your cart is empty
            </div>
          ) : (
            <div className="checkout flex flex-col mt-5 ">
              <div className="flex flex-row gap-2 justify-between w-full">
                <div>
                  <Image
                    src={"/images/image-product-1.jpg"}
                    width={50}
                    height={50}
                    quality={100}
                    style={{
                      objectFit: "cover",
                      width: "3rem",
                      height: "3rem",
                    }}
                    alt="item"
                  />
                </div>
                <div className=" flex flex-col ">
                  <div className=" flex-nowrap flex">
                    {" "}
                    Fall Limited Edition Sneakers
                  </div>
                  <div>
                    $125.00 x {item_number}{" "}
                    <span className=" font-extrabold text-black ml-3">
                      {total_price()}
                    </span>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={() => item_delete()}
                    className=" h-full w-full"
                  >
                    <Image
                      src={"/images/icon-delete.svg"}
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
              <div className=" w-full bg-[#ff7d1a] text-black py-3 rounded-lg mt-3">
                <button className=" w-full font-bold ">Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
