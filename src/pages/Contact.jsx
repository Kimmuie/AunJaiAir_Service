import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "หน้าแรก", paths: ["/home", "/"] },
    { name: "บริการของเรา", paths: ["/service"] },
    { name: "เกี่ยวกับเรา", paths: ["/about-us"] },
    { name: "ติดต่อเรา", paths: ["/contact"] },
  ];

  return (
    <>
    <section className="bg-linear-to-r from-Primary to-transparent w-full h-100">
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

export default Contact;
