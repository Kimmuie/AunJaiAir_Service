import { useState } from "react";

const Service = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "หน้าแรก", paths: ["/home", "/"] },
    { name: "บริการของเรา", paths: ["/service"] },
    { name: "เกี่ยวกับเรา", paths: ["/about-us"] },
    { name: "ติดต่อเรา", paths: ["/contact"] },
  ];

  return (
    <>
    <section className="bg-Primary w-full h-100">
      <img
        src="/img/img1.jpg"
        alt="Imgbackground"
        className="w-100"
      />
        <div>Hi</div>
    </section>
    </>
  );
};

export default Service;
