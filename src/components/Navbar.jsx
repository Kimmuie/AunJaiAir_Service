import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "หน้าแรก", paths: ["/home", "/"] },
    { name: "บริการของเรา", paths: ["/service"] },
    { name: "เกี่ยวกับเรา", paths: ["/about-us"] },
    { name: "ติดต่อเรา", paths: ["/contact"] },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-60">
      
      <div className=" bg-Secondary flex items-center justify-between px-40">
      {/* Logo */}
      <img
        src="/img/TestLogo.png"
        alt="Logo"
        className="w-16 cursor-pointer py-2"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <li key={item.name} className="font-bold text-xl cursor-pointer text-White hover:bg-Darker-Secondary hover:text-Secondary px-4 py-2 rounded-full transition">
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-6 md:hidden shadow-md">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-red-400 transition"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
