import Nav from "./components/Nav";
import Info from "./components/Info";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import Showcase from "./components/Showcase";
export default function Home() {
  return (
    <>
      <Nav />
      <div className=" md:grid md:grid-cols-2 md:mt-10 ">
        <Showcase />
        <Carousel />
        <Info />
      </div>
    </>
  );
}
