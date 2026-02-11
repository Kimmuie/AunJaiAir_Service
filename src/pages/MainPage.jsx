import { useState } from "react";
import PreviewSlide from "../components/PreviewSlide";
import Seperator from "../components/Seperator";
import StyledHeader from "../components/StyledHeader";
import { useNavigate } from "react-router-dom";
import { useScrollAnimate } from "../components/UseScrollAnimate";

const MainPage = () => {
    const { ref, isVisible } = useScrollAnimate();
    const [ copying, setCopying] = useState(false);
    const navigate = useNavigate()
    const [showAll, setShowAll] = useState(false);

    const imageItems = [
        { type: "image", src: "/img/S__20906051.jpg", },
        { type: "image", src: "/img/S__20906051.jpg", },
        { type: "image", src: "/img/S__20906051.jpg", },
        { type: "video", src: "/img/792517896.804625.mp4", },
        { type: "image", src: "/img/S__20906051.jpg", },
    ];
    
    const visibleItems = showAll
        ? imageItems
        : imageItems.slice(0, 4); 

    const serviceItems = [
        { name: "ธรรมดา", path: "service_1" },
        { name: "พรีเมี่ยม", path: "service_2" },
        { name: "แขวนคอยล์", path: "service_3" },
        { name: "ตัดล้างใหญ่", path: "service_4" },
    ];

    const priceItems = [
        { name: "9000-15000 BTU", service_1: 2000, service_2: 2000, service_3: 2000, service_4: 2000 },
        { name: "18000-24000 BTU", service_1: 2000, service_2: 2000, service_3: 2000, service_4: 2000 },
        { name: "26000-36000 BTU", service_1: 2000, service_2: 2000, service_3: 2000, service_4: 2000 },
        { name: "แอร์ 4 ทิศทางทุกขนาด", service_1: 2000, service_2: 2000, service_3: 2000, service_4: 2000 },
    ];

    const handleServiceClick = (sectionId) => {
        navigate("/service");

        setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        }, 100);
    };
    
    const handleCopyTel = (tel) => {
        navigator.clipboard.writeText(tel)
            .then(() => {
                console.log("Copied:", tel);
            })
            .catch((err) => {
                console.error("Copy failed", err);
            });
        setCopying(true)
        setTimeout(() => {
            setCopying(false)
        }, 200);
    };

  return (
    <>
    <section id="home" className="w-full h-full flex flex-col justify-between pt-30 pb-5 gap-2 items-center">
        <PreviewSlide />
        <div className="-z-10">
            <img src="/img/img1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-Primary via-Primary/90 to-transparent" />
        </div>
        <a href="#service">
            <button className="text-Secondary text-4xl cursor-pointer border-4 border-transparent hover:border-Secondary rounded-full px-2 py-1 transition flex justify-center items-center">
                ⮟
            </button>
        </a>
    </section>
    <Seperator />
    <section id="service" className="bg-White w-full h-full flex flex-col justify-start items-center py-25 gap-6">
        <StyledHeader title="รูปแบบการล้าง"/>
       <div className="max-w-6xl gap-6 grid grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item) => (
            <button  key={item.name} onClick={() => handleServiceClick(item.path)}>
                <div className="hover:translate-y-4 transition flex flex-col justify-center items-center bg-Primary rounded-2xl w-40 md:w-60 border-4 border-White shadow-[6px_6px_0_0_theme(colors.Darker-Secondary-2)]">
                    <div className="py-4 px-4 flex flex-col items-center gap-4">
                        <img src="/img/img1.jpg" alt="Logo" className="w-full rounded-lg border-4 border-Darker-Secondary-1"/>
                        <div className="flex justify-center items-center flex-col sm:flex-row">
                            <span className="font-bold text-Secondary text-xl">ล้างแอร์</span>
                            <span className="font-bold text-Secondary text-xl">{item.name}</span>
                        </div>
                    </div>
                    <span className="font-bold text-md text-Secondary bg-White w-full flex justify-center items-center rounded-b-xl">คลิกเพื่อดูรายละเอียด</span>
                </div>
            </button>
          ))}
        </div> 
        <StyledHeader title="การประเมินราคาเริ่มต้น"/>
        <div className="w-full overflow-x-auto px-3 flex justify-start pb-5 sm:pb-2 sm:justify-center items-center">
            <table className="w-full sm:w-2xl xl:w-5xl bg-White rounded-2xl overflow-hidden border-4 border-White shadow-[6px_6px_0_0_theme(colors.Darker-Secondary-2)] ">
                <thead>
                <tr className="bg-Primary text-Secondary">
                    <th className="py-4 px-6 border-b-4 border-Darker-Secondary-1 text-left">รุ่น/ขนาด (BTU)</th>
                    {serviceItems.map((item) => (
                        <>
                        <th className="py-4 px-6 border-b-4 border-Darker-Secondary-1">{item.name}</th>
                        </>
                    ))}
                </tr>
                </thead>
                <tbody>
                {priceItems.map((item, index) => (
                    <tr 
                    key={index} 
                    className="hover:bg-gray-50 transition-colors border-b-2 border-Darker-Secondary-1 last:border-b-0"
                    >
                    <td className="py-4 px-6 font-bold text-Darker-Secondary-2">{item.name}</td>
                    <td className="py-4 px-6 text-center">{item.service_1.toLocaleString()}.-</td>
                    <td className="py-4 px-6 text-center">{item.service_2.toLocaleString()}.-</td>
                    <td className="py-4 px-6 text-center">{item.service_3.toLocaleString()}.-</td>
                    <td className="py-4 px-6 text-center">{item.service_4.toLocaleString()}.-</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <StyledHeader title="ตัวอย่างการทำงาน"/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {visibleItems.map((item) => (
            <div
                key={item.id}
                className="rounded-xl overflow-hidden border-4 border-Darker-Secondary-1"
            >
                {item.type === "image" ? (
                <img
                    src={item.src}
                    alt=""
                    ref={ref}
                    className={`w-full h-full animate-fadeInUp object-cover ${isVisible && "animate-fadeInUp"}`}
                />
                ) : (
                <video
                    src={item.src}
                    controls  
                    ref={ref}
                    className={`w-full h-full animate-fadeInUp object-cover ${isVisible && "animate-fadeInUp"}`}
                />
                )}
            </div>
            ))}
        </div>
        {imageItems.length > 4 && (
            <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex justify-center mx-auto active:translate-y-2 hover:translate-y-1 cursor-pointer"
            >
            <StyledHeader
                title={showAll ? "Show Less" : "Show All"}
                className="rounded-4xl"
            />
            </button>
        )}
    </section>
    <Seperator />
    <section id="about-us" className="bg-White w-full h-full flex flex-col justify-start items-center py-25 gap-4">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10 px-0 sm:px-10">
            <img src="/img/img1.jpg" alt="Logo" className="w-xs sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
            <div className="w-full sm:w-md px-20 sm:px-0">
                <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">อุ่นใจแอร์ เซอร์วิส</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                </p>
            </div>
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-10 px-0 sm:px-10">
            <div className="w-full sm:w-md px-20 sm:px-0">
                <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">นายพลสันต์ เนตรสว่าง</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                </p>
            </div>
            <img src="/img/Dad.jpg" alt="Logo" className="w-80 rounded-full border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
        </div>
    </section>
    <Seperator />    
    <section id="contact" className="bg-Primary w-full py-6 px-4 flex lg:flex-row flex-col justify-center items-center md:gap-0 gap-6">
        <div className="w-full flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-6">
                <StyledHeader title="Contact Us"/>
                <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">อุ่นใจแอร์ เซอร์วิส</h2>
            </div>
            <div className="flex flex-col-reverse sm:flex-col justify-center items-center gap-6">
                <a href="https://line.me/R/ti/p/airdd888" className="w-full md:w-md bg-Secondary hover:underline text-Primary hover:translate-x-4 px-7 py-2 text-xl md:text-3xl flex justify-start items-center cursor-pointer duration-200 ease-in-out transition-all rounded-4xl border-4 border-Primary shadow-[6px_6px_0_0_theme(colors.Darker-Primary-2)]">
                    <img src="/img/icon-line.svg" alt="Logo" className="w-20"/>
                    <div className="flex items-start justify-center flex-col ml-6 font-semibold">
                        <span className="text-xl">เพิ่มเพื่อนด้วย Line ID</span>
                        <span>@airdd888</span>
                    </div>
                </a>
                <button onClick={() => handleCopyTel("0955834600")} className="w-full md:w-md bg-Secondary hover:underline text-Primary hover:translate-x-4 px-7 py-2 text-xl md:text-3xl flex justify-start items-center cursor-pointer duration-200 ease-in-out transition-all rounded-4xl border-4 border-Primary shadow-[6px_6px_0_0_theme(colors.Darker-Primary-2)]">
                    <img src="/img/icon-phone.svg" alt="Logo" className="w-20 p-2"/>
                    <div className="flex items-start justify-center flex-col ml-6 font-semibold">
                        <span className="text-xl">โทรศัพท์</span>
                        <span>095-583-4600</span>
                    </div>
                </button>
                <p className="text-Secondary text-lg w-full md:w-md px-2">
                    ดำเนินการล้างด้วยอุปกรณ์เฉพาะทางที่ได้มาตรฐาน <br />
                    ผ่านกระบวนการทำความสะอาดอย่างพิถีพิถันทุกขั้นตอน <br />
                    เพื่อประสิทธิภาพการใช้งานและอายุการใช้งานที่ยาวนาน
                </p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full bg-Secondary rounded-2xl px-5 py-5 md:mx-20 gap-7 border-4 border-Primary shadow-[6px_6px_0_0_theme(colors.Darker-Primary-2)]">
            <StyledHeader title="Google Map"/>
            <div className="w-full max-w-4xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30977.91502708759!2d100.6697118920618!3d13.944347575086052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7daa0a84bb39%3A0xba6761d015ef726a!2z4Lij4LmJ4Liy4LiZ4Lit4Li44LmI4LiZ4LmD4LiI4LmB4Lit4Lij4LmMIOC5gOC4i-C4reC4o-C5jOC4p-C4tOC4qg!5e0!3m2!1sen!2sth!4v1770824889964!5m2!1sen!2sth"
                    style={{ border: 0 }}
                    allowFullScreen=""    
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl shadow-lg border-0 w-full h-80"
                ></iframe>
            </div>
        </div>
    </section>
    </>
  );
};

export default MainPage;
