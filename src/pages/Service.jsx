import { useState } from "react";
import Seperator from "../components/Seperator";

const ServicePage = () => {
  return (
    <>
        <div className="w-full h-full bg-Primary overflow-hidden ">
            <section id="service_1" className="bg-White w-full h-full flex md:flex-row flex-col justify-center items-center py-25 gap-20">
                <img src="/img/service_1.jpg" alt="Logo" className="w-xs md:w-60 sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center px-6 sm:px-0">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์ธรรมดา</h2>
                    <p>
                        บริการล้างแอร์พื้นฐาน เหมาะสำหรับการดูแลรักษาแอร์เป็นประจำ 
                        โดยช่างจะทำการถอดถาดน้ำทิ้ง ล้างคอยล์เย็น ฉีดล้างคอยล์ร้อน 
                        และฆ่าเชื้อภายในเครื่อง เพื่อลดการสะสมของฝุ่น เชื้อรา และแบคทีเรีย 
                        ช่วยให้แอร์เย็นเร็วขึ้น ประหยัดไฟ และยืดอายุการใช้งานของเครื่อง 
                        แนะนำให้ล้างอย่างสม่ำเสมอทุก 3–6 เดือน
                    </p>
                    <h2 className="text-Secondary text-base md:text-lg bg-Primary sm:w-xs w-full flex justify-center items-center px-4 rounded-full font-bold">รับประกันน้ำหยด 30 วัน</h2>
                </div>
            </section> 
            <Seperator/>
            <section id="service_2" className="bg-White w-full h-full flex md:flex-row-reverse flex-col justify-center items-center py-25 gap-20">
                <img src="/img/service_2.jpg" alt="Logo" className="w-xs md:w-60 sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center px-6 sm:px-0">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์พิเศษ</h2>
                    <p>
                        บริการล้างแอร์แบบละเอียดพิเศษ สำหรับแอร์ที่เริ่มมีเสียงดัง 
                        ลมออกเบา หรือใช้งานต่อเนื่องเป็นเวลานาน 
                        ช่างจะทำการถอดล้างโพรงกระรอก ทำความสะอาดชุดพัดลม 
                        อัดจารบี ขัดแกนและบุชเครื่อง เพื่อลดแรงเสียดทาน 
                        ช่วยให้เครื่องทำงานเงียบขึ้น ลมแรงขึ้น และลดโอกาสการสึกหรอในระยะยาว
                    </p>
                    <h2 className="text-Secondary text-base md:text-lg bg-Primary sm:w-xs w-full flex justify-center items-center px-4 rounded-full font-bold">รับประกันน้ำหยด 30 วัน</h2>
                </div>
            </section> 
            <Seperator/>
            <section id="service_3" className="bg-White w-full h-full flex md:flex-row flex-col justify-center items-center py-25 gap-20">
                <img src="/img/service_3.jpg" alt="Logo" className="w-xs md:w-60 sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center px-6 sm:px-0">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์แขวนคอย</h2>
                    <p>
                        เหมาะสำหรับแอร์แขวนหรือแอร์ที่มีปัญหาน้ำหยดบ่อย 
                        มีกลิ่นอับ หรือมีคราบสกปรกสะสมภายในจำนวนมาก 
                        ช่างจะทำการล้างทำความสะอาดอย่างละเอียดในจุดที่เข้าถึงยาก 
                        รวมถึงระบบระบายน้ำและคอยล์ เพื่อแก้ไขปัญหาที่ต้นเหตุ 
                        ช่วยให้แอร์กลับมาทำงานได้อย่างมีประสิทธิภาพและถูกสุขลักษณะมากขึ้น
                    </p>
                    <h2 className="text-Secondary text-base md:text-lg bg-Primary sm:w-xs w-full flex justify-center items-center px-4 rounded-full font-bold">รับประกันน้ำหยด 90 วัน</h2>
                </div>
            </section> 
            <Seperator/>
            <section id="service_4" className="bg-White w-full h-full flex md:flex-row-reverse flex-col justify-center items-center py-25 gap-20">
                <img src="/img/service_4.jpg" alt="Logo" className="w-xs md:w-60 sm:w-100 rounded-lg border-4 border-White shadow-[6px_6px_0_0_theme(colors.Primary)]"/>
                <div className="w-full sm:w-md gap-5 flex flex-col justify-center px-6 sm:px-0">
                    <h2 className="text-Secondary text-xl md:text-3xl font-extrabold">ล้างแอร์ตัดล้างใหญ่</h2>
                    <p>
                        บริการล้างแอร์แบบถอดล้างทั้งระบบ เหมาะสำหรับแอร์ที่ใช้งานมานาน 
                        มีความสกปรกสะสมสูง หรือไม่ได้ล้างมานานหลายปี 
                        ช่างจะทำการถอดเครื่องออกมาล้างทั้งหมด ทั้งคอยล์เย็น คอยล์ร้อน 
                        และชิ้นส่วนภายในทุกจุด เพื่อขจัดคราบฝังลึกและสิ่งสกปรกอย่างหมดจด 
                        ช่วยให้แอร์กลับมาเย็นจัด ทำงานเสถียร และยืดอายุการใช้งานได้สูงสุด
                    </p>
                    <h2 className="text-Secondary text-base md:text-lg bg-Primary sm:w-xs w-full flex justify-center items-center px-4 rounded-full font-bold">รับประกันน้ำหยด 180 วัน</h2>
                </div>
            </section> 
        </div>
    </>
  );
};

export default ServicePage;
