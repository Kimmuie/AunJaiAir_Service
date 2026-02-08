import { useState } from "react";
import PreviewSlide from "../components/PreviewSlide";
import Seperator from "../components/Seperator";

const Home = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "หน้าแรก", paths: ["/home", "/"] },
    { name: "บริการของเรา", paths: ["/service"] },
    { name: "เกี่ยวกับเรา", paths: ["/about-us"] },
    { name: "ติดต่อเรา", paths: ["/contact"] },
  ];

  return (
    <>
    <section className="w-full h-180 flex flex-col justify-between py-20 items-center">
        <PreviewSlide />
        <div className="-z-10">
            <img src="/img/img1.jpg" className="absolute inset-0  w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-Primary via-Primary/90 to-transparent" />
        </div>
        <a href="#home_2">
            <button className="mt-6 text-Secondary text-4xl cursor-pointer border-4 border-transparent hover:border-Secondary rounded-full px-2 py-1 transition flex justify-center items-center">
                ⮟
            </button>
        </a>
    </section>
    <Seperator />
    <section id="home_2" className="bg-White w-full h-200">
    </section>
    <Seperator />    
    <section id="home_3" className="bg-Primary w-full h-140 flex justify-between items-center">
        <div className="w-full flex flex-col justify-center items-start ml-50 gap-6">
            <div className="flex justify-center items-center gap-6">
                <h1 className="bg-Secondary text-White px-6 py-4  rounded-bl-4xl rounded-tr-4xl text-4xl">Contact Us</h1>
                <h2 className="text-Secondary text-3xl">อุ่นใจแอร์ เซอร์วิส</h2>
            </div>
            <button className="w-md bg-transparent hover:bg-Secondary hover:text-Primary hover:translate-x-4 transition border-4 border-Secondary px-6 py-4 text-Secondary text-3xl flex justify-center items-center cursor-pointer rounded-4xl">
                <img src="/img/TestLogo.png" alt="Logo" className="w-20"/>
                <div className="flex items-start justify-center flex-col ml-6 font-semibold">
                    <span>เพิ่มเพื่อนด้วย Line ID</span>
                    <span>@aunjaiair</span>
                </div>
            </button>
            <button className="w-md bg-transparent hover:bg-Secondary hover:text-Primary hover:translate-x-4 transition border-4 border-Secondary px-6 py-4 text-Secondary text-3xl flex justify-center items-center cursor-pointer rounded-4xl">
                <img src="/img/TestLogo.png" alt="Logo" className="w-20"/>
                <div className="flex items-start justify-center flex-col ml-6 font-semibold">
                    <span>เพิ่มเพื่โทรศัพท์</span>
                    <span>095-583-4600</span>
                </div>
            </button>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
            <img
                src="/img/TestLogo.png"
                alt="Logo"
                className="w-50 cursor-pointer py-4"
            />
            <p className="w-50 text-Secondary mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
            </p>
        </div>
    </section>
    </>
  );
};

export default Home;
