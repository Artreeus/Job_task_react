import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "HOME", active: true },
    { name: "SERVICE", active: false },
    { name: "COMBO SALES", active: false },
    { name: "PORTFOLIO", active: false },
    { name: "ABOUT US", active: false },
    { name: "BLOGS", active: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 ${scrolling ? "bg-[#001655] shadow-md" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        {/* Logo */}
        <img src="/hlogo.png" alt="Logo" className="w-[117px] h-[30px]" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer text-sm lg:text-base font-${
                item.active ? "black" : "semibold"
              } transition-colors duration-300 ${
                item.active ? "text-[#ff693b]" : "text-white hover:text-[#ff693b]"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* CTA Button (Visible on larger screens) */}
        <Button className="hidden lg:block bg-[#ff693b] text-white font-medium text-xs px-4 py-2 rounded shadow-md">
          See Pricing
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <div className="h-5 w-5">✕</div> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#001655] text-white w-full rounded shadow-lg p-4 absolute left-0 top-[60px] z-50">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`text-base cursor-pointer font-${
                  item.active ? "black" : "semibold"
                } ${
                  item.active ? "text-[#ff693b]" : "text-white hover:text-[#ff693b]"
                }`}
              >
                {item.name}
              </div>
            ))}
            <Button className="bg-[#ff693b] text-white font-semibold text-base px-6 py-3 rounded shadow-md w-full">
              SEE PRICING
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
