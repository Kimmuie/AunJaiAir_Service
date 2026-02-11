import { useState } from "react";
import Seperator from "../components/Seperator";

const ServicePage = () => {
  return (
    <>
        <div className="w-full h-full bg-Primary overflow-hidden ">
            <section id="service_1" className="bg-White w-full h-full flex flex-row justify-center items-center py-25 gap-20">
                <img src="/img/img1.jpg" alt="Logo" className="w-xs sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์ธรรมดา</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                    </p>
                </div>
            </section> 
            <Seperator/>
            <section id="service_2" className="bg-White w-full h-full flex flex-row-reverse justify-center items-center py-25 gap-20">
                <img src="/img/img1.jpg" alt="Logo" className="w-xs sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์พรีเมี่ยม</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                    </p>
                </div>
            </section> 
            <Seperator/>
            <section id="service_3" className="bg-White w-full h-full flex flex-row justify-center items-center py-25 gap-20">
                <img src="/img/img1.jpg" alt="Logo" className="w-xs sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์แขวนคอย</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                    </p>
                </div>
            </section> 
            <Seperator/>
            <section id="service_4" className="bg-White w-full h-full flex flex-row-reverse justify-center items-center py-25 gap-20">
                <img src="/img/img1.jpg" alt="Logo" className="w-xs sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์ตัดล้างใหญ่</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                    </p>
                </div>
            </section> 
        </div>
    </>
  );
};

export default ServicePage;
