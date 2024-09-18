import Stack from "./Stack";

export default function Info() {
  return (
    <>
      <div className="m-5 md:w-[500px] md:place-self-center md:-translate-y-10 md:-translate-x-32 md:mt-24 ">
        <div className="text-[#68707d] text-sm font-bold  tracking-widest">
          SNEAKER COMPANY
        </div>
        <div className=" text-[#000000bf] font-extrabold  text-3xl">
          Fall Limited Edition Sneakers
        </div>
        <p className=" text-[#68707d] text-sm">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <Stack />
        </div>
      </div>
    </>
  );
}
