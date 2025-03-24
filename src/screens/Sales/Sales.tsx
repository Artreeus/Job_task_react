import React, { useState } from "react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { ClientsSection } from "./sections/ClientsSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FAQSection } from "./sections/FAQSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { Menu } from "lucide-react";
import Navbar from "../../components/ui/Navbar";

export const Sales = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation menu items
  const navItems = [
    { name: "HOME", active: true },
    { name: "SERVICE", active: false },
    { name: "COMBO SALES", active: false },
    { name: "PORTFOLIO", active: false },
    { name: "ABOUT US", active: false },
    { name: "BLOGS", active: false },
  ];

  // Stats data
  const statsData = [
    {
      icon: "/vector-51.svg",
      value: "2k+",
      label: "Websites build",
    },
    {
      icon: "/vuesax-bulk-like.svg",
      value: "97%",
      label: "Client satisfaction",
    },
    {
      icon: "/vuesax-bulk-people.svg",
      value: "25+",
      label: "Team members",
    },
    {
      icon: "/vuesax-bulk-profile-circle.svg",
      value: "500+",
      label: "Amazing clients",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Hero background */}
        <div className="relative w-full">
          <div className="relative">
            <div className="w-full h-[943px] md:h-[943px] sm:h-[800px]" style={{ background: "#001655" }} />
            <div className="absolute inset-0" style={{ background: "#18018221", backdropFilter: "blur(82px)" }} />
            <div className="absolute bottom-0 w-full">
              <img className="w-full h-auto max-h-[232px]" alt="Group" src="/group.png" />
            </div>
            <div className="absolute bottom-0 w-full h-[152px]" style={{ background: "#001142", filter: "blur(97px)" }} />
          </div>

          <div className="absolute inset-0">
            <img
              className="w-full h-auto md:h-[828px] object-cover"
              alt="Mask group"
              src="/mask-group-1.png"
            />
          </div>

          <div className="absolute top-[505px] left-1/2 transform -translate-x-1/2 w-[701px] max-w-full h-[291px]" 
               style={{ background: "#0a3cc999", borderRadius: "350.5px/145.5px", filter: "blur(132px)" }} />

          <Navbar/>

          {/* Hero Content */}
          <div className="absolute top-32 md:top-44 left-1/2 transform -translate-x-1/2 flex flex-col w-full max-w-[720px] px-4 md:px-0 items-center gap-6 md:gap-[52px]">
            <div className="flex flex-col items-center gap-2 w-full">
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[75px] text-white text-center tracking-[2px] md:tracking-[3.75px] leading-[1.1] md:leading-[85px] [font-family:'Raleway',Helvetica]">
                DIGITAL SERVICES
              </h1>
              <h2 className="font-extrabold text-xl md:text-[25px] text-white text-center leading-[1.2] md:leading-[31px] [font-family:'Raleway',Helvetica]">
                BUILDING YOUR EMPIRE DIGITALLY
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button className="bg-[#ff693b] text-white font-semibold text-base px-[18px] py-3.5 rounded shadow-[0px_1px_4px_#18203c14] w-full sm:w-[238px] h-[50px]">
                SEE PRICING
              </Button>
              <Button
                variant="outline"
                className="text-white font-semibold text-black px-[18px] py-3.5 border-white w-full sm:w-[238px] h-[50px]"
              >
                BOOK AN APPOINTMENT
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="absolute lg:top-[530px] top-[330px] md:top-[457px] left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 md:gap-[27px] w-full  px-4 py-10">
            {statsData.map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && index < statsData.length && (
                  <Separator orientation="vertical" className="h-12 hidden sm:block" />
                )}
                <Card className="w-full sm:w-[268px] px-4 sm:px-8 py-3.5 rounded backdrop-blur-[36px] bg-transparent border-none">
                  <CardContent className="flex items-center p-0">
                    <Avatar className="w-12 h-12 rounded border-[1.54px] border-solid border-white mr-4">
                      <AvatarFallback className="bg-transparent">
                        <img
                          className="w-6 h-6"
                          alt={stat.label}
                          src={stat.icon}
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="font-[600] text-[24px] text-white leading-[32px]">
                        {stat.value}
                      </div>
                      <div className="font-[600] text-[16px] text-white leading-[22px]">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </React.Fragment>
            ))}
          </div>

          {/* Hero Image */}
          <img
            className="absolute lg:top-[710px] top-[810px]  md:top-[660px] left-1/2 transform -translate-x-1/2 w-full max-w-[984px] md:w-[700px] md:pt-20 h-auto object-cover z-40 px-4 sm:px-0"
            alt="Image"
            src="/image.png"
          />

          {/* Hero Section Component */}
          
        </div> 

        {/* Main Content Sections */}
        <div className="relative w-full">
          {/* Hero Section */}
          <HeroSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Clients Section */}
          <ClientsSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* Team Section */}
          <TeamSection />
        </div>
      </div>
    </div>
  );
};