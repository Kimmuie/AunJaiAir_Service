import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active ID

  const menuItems = [
    { name: "หน้าแรก", path: "home" },
    { name: "บริการของเรา", path: "service" },
    { name: "เกี่ยวกับเรา", path: "about-us" },
    { name: "ติดต่อเรา", path: "contact" },
  ];

  useEffect(() => {
    const observers = [];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // If the section is visible in the viewport
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the upper part of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section by ID
    menuItems.forEach((item) => {
      const element = document.getElementById(item.path);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function for active styles
  const activeClass = "text-Primary";
  const inactiveClass = "text-White hover:text-Secondary hover:bg-Primary";

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-Secondary flex items-center justify-between px-10 md:px-40">
        {/* Logo */}
        <a href="#home">
          <img src="/img/TestLogo.png" alt="Logo" className="w-16 cursor-pointer py-2" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.path}`}
                className={`font-bold text-xl cursor-pointer px-4 py-2 rounded-full transition inline-block ${
                  activeSection === item.path ? activeClass : inactiveClass
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-White text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {open && (
          <ul className="absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-6 md:hidden shadow-md">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.path}`}
                  onClick={() => setOpen(false)}
                  className={`transition ${activeSection === item.path ? "text-Secondary font-bold" : ""}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;