import  { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ClientsSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("UI/UX");

  // Portfolio images data matching the screenshot
  const portfolioItems = [
    { src: "/image-4.png", alt: "Portfolio image 1" },
    { src: "/image-5.png", alt: "Portfolio image 2" },
    { src: "/image-6.png", alt: "Portfolio image 3" },
    { src: "/image-7.png", alt: "Portfolio image 4" },
    { src: "/image-28.png", alt: "Portfolio image 5" },
    { src: "/image-8.png", alt: "Portfolio image 6" },
    { src: "/image-9.png", alt: "Portfolio image 7" },
    { src: "/image-10.png", alt: "Portfolio image 8" },
    { src: "/image-11.png", alt: "Portfolio image 9" },
    { src: "/image-12.png", alt: "Portfolio image 10" },
    { src: "/image-28-1.png", alt: "Portfolio image 11" },
    { src: "/image-13.png", alt: "Portfolio image 12" },
  ];

  // Duplicate items to create infinite scroll effect
  const doubledPortfolioItems = [...portfolioItems, ...portfolioItems];

  // Filter categories matching the screenshot
  const filterCategories = [
    "UI/UX", "WEBSITE", "SEO", "LOGO DESIGN", "BANNER DESIGN", "GOOGLE ADS"
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col w-full items-start gap-[30px]">
          {/* Header section */}
          <div className="flex items-end justify-between relative self-stretch w-full">
            <div className="flex flex-col w-[677px] items-start gap-4">
              <div className="relative w-fit [font-family:'Raleway',Helvetica] font-semibold text-[#0b89ff] text-base text-center tracking-[3.84px] leading-6 whitespace-nowrap">
                UI/UX PORTFOLIO
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-system-dark lg:text-5xl md:text-3xl sm:text-xl  tracking-[0.96px] leading-6">
                Check Our Previous Work
              </div>
            </div>

            <Button className="h-11 px-10 py-3.5 bg-[#ff693b] text-white rounded hover:bg-[#ff693b]/90">
              All Portfolio
            </Button>
          </div>

          {/* Separator line */}
          <Separator className="w-full h-px" />

          {/* Filter categories */}
          <div className="flex items-center gap-[42px]">
            {filterCategories.map((category) => (
              <div 
                key={category} 
                className="inline-flex items-center gap-1.5 cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] ${
                    activeCategory === category
                      ? "font-bold text-[#0b89ff]"
                      : "font-normal text-[#474747]"
                  } text-base text-center tracking-[0] leading-[22px] whitespace-nowrap`}
                >
                  {category}
                </div>
              </div>
            ))}
          </div>

          {/* First Portfolio carousel (moving right) */}
          <div className="w-full mt-11 overflow-hidden">
            <div className="flex space-x-6 animate-scroll-right">
              {doubledPortfolioItems.map((image, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[500px] h-[281px] bg-[#d7d7d7] overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={image.alt}
                    src={image.src}
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Second Portfolio carousel (moving left) */}
          <div className="w-full mt-6 overflow-hidden">
            <div className="flex space-x-6 animate-scroll-left">
              {doubledPortfolioItems.map((image, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[500px] h-[281px] bg-[#d7d7d7] overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={image.alt}
                    src={image.src}
                  />
                </Card>
              ))}
            </div>
          </div>
          <div className="flex justify-center mx-auto gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-md border border-[#0a2c8c]"
         
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 rounded-md bg-[#ff693b]"
         
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

          {/* Footer text */}
          <div className="flex items-center gap-4 justify-end w-full mt-4">
            <div className="relative w-fit [font-family:'Raleway',Helvetica] font-medium text-[#353434] text-sm tracking-[3.72px] leading-5 whitespace-nowrap">
              CREATIVE PORTFOLIO
            </div>
            <div className="relative w-[60px] h-0.5 border-t [border-top-style:solid] border-[#353434]" />
          </div>
        </div>
      </div>
    </section>
  );
};