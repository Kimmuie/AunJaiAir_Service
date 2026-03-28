import { useState } from "react";
import PreviewSlide from "../components/PreviewSlide";
import Seperator from "../components/Seperator";
import StyledHeader from "../components/StyledHeader";
import StyledButton from "../components/StyledButton";
import { useNavigate } from "react-router-dom";
import { useScrollAnimate } from "../components/UseScrollAnimate";
import PriceTable from "../components/priceTable";

const MainPage = () => {
    const { ref, isVisible } = useScrollAnimate();
    const [ typeFilter, setTypeFilter] = useState("แอร์ผนัง");
    const [ copying, setCopying] = useState(false);
    const navigate = useNavigate()
    const [showAll, setShowAll] = useState(false);

    const filterItems = [
        "แอร์ผนัง",
        "แอร์แขวน",
        "แอร์เปลือยฝังฝ้า",
        "แอร์ 4 ทิศทาง"
    ];

    const imageItems = [
        { type: "image", src: "/img/S__20906051.jpg", },
        { type: "video", src: "/img/792517886.018088.mp4", },
        { type: "image", src: "/img/S__20906058.jpg", },
        { type: "video", src: "/img/792517896.804625.mp4", },
        { type: "image", src: "/img/S__20906085.jpg", },
        { type: "image", src: "/img/S__20914200.jpg", },
        { type: "image", src: "/img/D95A8942.jpg", },
        { type: "image", src: "/img/S__20914201.jpg", },
        { type: "image", src: "/img/S__20914204.jpg", },
        { type: "image", src: "/img/S__20906067.jpg", },
        { type: "image", src: "/img/S__20906055.jpg", },
        { type: "image", src: "/img/S__20906047.jpg", },
    ];
    
    const visibleItems = showAll
        ? imageItems
        : imageItems.slice(0, 4); 

    const serviceItems = [
        { name: "ธรรมดา", path: "service_1", image: "/img/service_1.jpg" },
        { name: "พิเศษ", path: "service_2", image: "/img/service_2.jpg" },
        { name: "แขวนคอยล์", path: "service_3", image: "/img/service_3.jpg" },
        { name: "ตัดล้างใหญ่", path: "service_4", image: "/img/service_4.jpg" },
    ];

    const priceItems_2 = [
        { name: "แอร์แขวน 9000-15000 BTU", service_1: 500, service_2: 900, service_3: 1800, service_4: 2500, uninstall: 500, install: 3000 },
        { name: "แอร์แขวน 18000-24000 BTU", service_1: 600, service_2: 1000, service_3: 1800, service_4: 2500, uninstall: 800, install: 3500 },
        { name: "แอร์แขวน 26000-36000 BTU", service_1: 800, service_2: 1200, service_3: 1800, service_4: 2500, uninstall: 1000, install: 4500 },
        { name: "แอร์ 4 ทิศทาง ทุกขนาด BTU", service_1: 1800, service_2: 1800, service_3: 1800, service_4: 2500, uninstall: 500, install: 3000 },
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
        }, 450);
    };

  return (
    <>
    <section id="home" className="w-full h-full flex flex-col justify-between pb-0 sm:pb-5 gap-2 items-center">
        {/* Gap Nav */}
        <div className="h-30" />
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
                <div className="cursor-pointer hover:translate-y-4 transition flex flex-col justify-center items-center bg-Primary rounded-2xl w-40 md:w-60 border-4 border-White shadow-[6px_6px_0_0_theme(colors.Darker-Secondary-2)]">
                    <div className="py-4 px-4 flex flex-col items-center gap-4">
                        <img src={item.image} alt="Logo" className="w-full rounded-lg border-4 border-Darker-Secondary-1"/>
                        <div className="flex justify-center items-center flex-col lg:flex-row">
                            <span className="font-bold text-Secondary text-xl">ล้างแอร์</span>
                            <span className="font-bold text-Secondary text-xl">{item.name}</span>
                        </div>
                    </div>
                    <span className="font-bold md:text-base text-sm text-Secondary bg-White w-full flex justify-center items-center rounded-b-xl">คลิกเพื่อดูรายละเอียด</span>
                </div>
            </button>
          ))}
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-4">
            <StyledHeader title="การประเมินราคาเริ่มต้น"/>
            <div className="flex gap-2">
            {filterItems.map((item) => (
                <StyledButton title={item} onClick={() => setTypeFilter(item)} className={`${typeFilter == item ? "text-Primary bg-Secondary" : "bg-Primary text-Secondary"}`}/>
            ))}
            </div>
        </div>
        <PriceTable filter={typeFilter}/>
        <p className="text-Secondary sm:text-lg text-base text-center w-full md:w-md px-2">
            ค่าใช้จ่ายเพิ่มเติม คิดตามจริง แต่แจ้งลูกค้าก่อนปฏิบัติงาน <br />
            *หมายเหตุ* รับประกันงานติดตั้ง 6 เดือน <br />
        </p>
        <StyledHeader title="ตัวอย่างการทำงาน"/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-2">
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
            <StyledButton className="bg-Primary text-Secondary" title={showAll ? "Show Less" : "Show All"} onClick={() => setShowAll((prev) => !prev)}/>
        )}
    </section>
    <Seperator />
    <section id="about-us" className="bg-White w-full h-full flex flex-col justify-start items-center py-25 gap-4">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10 px-0 sm:px-10">
            <img src="/img/img1.jpg" alt="Logo" className="w-xs sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
            <div className="w-full sm:w-md px-5 sm:px-0">
                <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">อุ่นใจแอร์ เซอร์วิส</h2>
                <p>
                    ให้บริการด้านเครื่องปรับอากาศแบบครบวงจร 
                    ทั้งล้าง, ซ่อม, ย้าย, และติดตั้ง โดยทีมช่างผู้มีประสบการณ์ 
                    เรามุ่งเน้นการทำงานที่ได้มาตรฐาน สะอาด ปลอดภัย และตรงต่อเวลา 
                    เพื่อให้ลูกค้าได้รับบริการที่คุ้มค่าและมั่นใจในคุณภาพทุกขั้นตอน
                    ด้วยประสบการณ์ในการให้บริการทั้งบ้านพักอาศัย ร้านค้า และสำนักงาน 
                    เราพร้อมดูแลเครื่องปรับอากาศของคุณให้ทำงานได้อย่างเต็มประสิทธิภาพ 
                    เย็นเร็ว ประหยัดไฟ และใช้งานได้อย่างยาวนาน
                </p>
            </div>
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-10 px-0 sm:px-10">
            <div className="w-full sm:w-md px-5 sm:px-0">
                <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">นายพลสันต์ เนตรสว่าง</h2>
                <p>
                    เจ้าของกิจการอุ่นใจแอร์ เซอร์วิส
                    โดยมีประสบการณ์ด้านงานเครื่องปรับอากาศมายาวนาน 
                    เชี่ยวชาญทั้งงานติดตั้ง งานซ่อม และการแก้ไขปัญหาเฉพาะทาง 
                    ด้วยความตั้งใจที่จะให้บริการอย่างซื่อสัตย์และจริงใจต่อลูกค้า
                </p>
            </div>
            <img src="/img/Dad.jpg" alt="Logo" className="w-80 rounded-full border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
        </div>
    </section>
    <Seperator />    
    <section id="contact" className="bg-Primary w-full py-6 px-4 flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-6">
        <div className="w-full flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-6">
                <StyledHeader title="Contact Us"/>
                <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">อุ่นใจแอร์ เซอร์วิส</h2>
            </div>
            <div className="flex flex-col-reverse lg:flex-col justify-center items-center gap-6">
                <a href="https://line.me/ti/p/airdd888" target="_blank" className="w-full md:w-md bg-Secondary hover:underline text-Primary hover:translate-x-4 px-7 py-2 text-xl md:text-3xl flex justify-start items-center cursor-pointer duration-200 ease-in-out transition-all rounded-4xl border-4 border-Primary shadow-[6px_6px_0_0_theme(colors.Darker-Primary-2)]">
                    <img src="/img/icon-line.svg" alt="Logo" className="w-20"/>
                    <div className="flex items-start justify-center flex-col ml-6 font-semibold">
                        <span className="text-xl">เพิ่มเพื่อนด้วย Line ID</span>
                        <span>airdd888</span>
                    </div>
                </a>
                <button onClick={() => handleCopyTel("0955834600")} className="w-full md:w-md bg-Secondary hover:underline text-Primary hover:translate-x-4 px-7 py-2 text-xl md:text-3xl flex justify-start items-center cursor-pointer duration-200 ease-in-out transition-all rounded-4xl border-4 border-Primary shadow-[6px_6px_0_0_theme(colors.Darker-Primary-2)]">
                    {copying && (
                    <div className=" absolute w-full">
                        <img src="/img/icon-copy.svg" alt="Logo" className="w-8 animate-fadeOutUp"/>
                    </div>
                    )}
                    <img src="/img/icon-phone.svg" alt="Logo" className="w-20 p-2"/>
                    <div className="flex items-start justify-center flex-col ml-6 font-semibold">
                        <span className="text-xl">โทรศัพท์</span>
                        <span>095-583-4600</span>
                    </div>
                </button>
                <p className="text-Secondary sm:text-lg text-base w-full md:w-md px-2">
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
