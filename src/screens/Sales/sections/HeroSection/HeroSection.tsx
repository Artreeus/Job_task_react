import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Carousel } from "../../../../components/ui/carousel";

// Service card data
const serviceCards = [
  {
    id: 1,
    title: "WordPress Website",
    description: "Design & Development",
    icon: "/p1.png",
   
  },
  {
    id: 2,
    title: "Content Writing",
    description: "For entire project",
    icon: "/p2.png",
  },
  {
    id: 3,
    title: "Monthly SEO",
    description: "Rank #1 on google",
    icon: "/p3.png",
  },
  {
    id: 4,
    title: "Brand Marketing",
    description: "From start to end",
    icon: "/p1.png",
  },
  {
    id: 5,
    title: "Social Media Post",
    description: "Full Social kit",
    icon: "/p2.png",
  },
  {
    id: 7,
    title: "Animated Video",
    description: "Up to 10-Page",
    icon: "/p3.png",
  },
  {
    id: 8,
    title: "Professional Logo",
    description: "Create brand identity",
    icon: "/p1.png",
  },
  {
    id: 9,
    title: "Custom Graphics",
    description: "Up to 4",
    icon: "/p2.png",
  },
];

// Service categories
const serviceCategories = [
  { id: 1, name: "WEBSITE", active: true },
  { id: 2, name: "UI/UX", active: false },
  { id: 3, name: "SEO", active: false },
  { id: 4, name: "LOGO DESIGN", active: false },
  { id: 5, name: "BANNER DESIGN", active: false },
  { id: 6, name: "GOOGLE ADS", active: false },
];

// Stats data
const stats = [
  { id: 1, value: "25+", label: "Projects built" },
  { id: 2, value: "97%", label: "Client satisfaction" },
  { id: 3, value: "25+", label: "Team members" },
  { id: 4, value: "500+", label: "Amazing clients" },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#001655] overflow-hidden z-0 pt-72 md:pt-40 sm:pt-0 p-16">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-[152px] bg-[#001142] blur-[97px]" />
      <div className="absolute top-[245px] right-[400px] w-[381px] h-[390px] bg-[#0a3cc999] rounded-[190.5px/195px] blur-[132px]" />
      <div className="absolute top-[467px] left-[707px] w-[831px] h-[590px] bg-[#0a3cc999] rounded-[415.5px/295px] blur-[132px]" />

      {/* Bottom wave image */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <img
          className="w-full h-[204px] object-cover"
          alt="Wave background"
          src="/group-11.png"
        />
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header section */}
        <div className="flex flex-col w-full items-start gap-[30px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full border-b border-gray-700 pb-6">
            <div className="flex flex-col w-full md:w-[677px] items-start gap-4 mb-4 md:mb-0 ">
              <p className="font-['Raleway',Helvetica] font-semibold text-[#ff693b] text-base tracking-[3.84px] leading-6">
                DIGITAL SERVICES
              </p>
              <h2 className="font-['Inter',Helvetica] font-bold text-white text-4xl  tracking-[0.96px] leading-normal md:leading-tight">
                Check Our Available Services
              </h2>
            </div>
            <Button className="bg-[#ff693b] hover:bg-[#ff693b]/90 text-white rounded h-11 w-full sm:w-auto">
              All Services
            </Button>
          </div>

          <Separator className="bg-white/20" />

          {/* Service categories */}
          <div className="flex flex-wrap items-center gap-4 md:gap-[42px]">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`text-sm md:text-base ${
                  category.active
                    ? "font-bold text-[#0b89ff]"
                    : "font-normal text-white"
                } mb-2 md:mb-0`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
          
          {/* Service cards carousel */}
          <div className="mt-8 w-full">
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
                containScroll: "trimSnaps",
                // Setting the number of slides visible at once - using breakpoints feature from embla-carousel
                // This ensures at least 3 cards are visible on larger screens
                breakpoints: {
                  '(min-width: 640px)': { slidesToScroll: 2 },
                  '(min-width: 768px)': { slidesToScroll: 2 },
                  '(min-width: 1024px)': { slidesToScroll: 3 },
                  '(min-width: 1280px)': { slidesToScroll: 4 }
                }
              }}
              className="w-full"
              autoplay={true}
            >
              {serviceCards.map((service) => (
                <div 
                  key={service.id} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 pl-4  "
                >
                  <Card
                    className="relative mx-2 h-[358px] bg-[#3057c633] rounded border border-solid border-[#ffffff38] backdrop-blur-[36px] "
                  >
                    {/* Card icon/image placeholder */}
                    <div className="flex justify-center items-center h-[152px]  relative pt-3">
                      {service.icon && (
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-auto h-auto max-h-[152px]"
                        />
                      )}
                     
                    </div>

                    {/* Card content */}
                    <div className="flex flex-col items-center gap-4 mt-6 ">
                      <h3 className="font-['Inter',Helvetica] font-semibold text-white text-2xl text-center leading-[42px]">
                        {service.title}
                      </h3>
                      <p className="font-['Inter',Helvetica] font-normal text-white text-base text-center leading-[42px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Card buttons */}
                    <div className="flex items-center gap-2 justify-center mt-4 ">
                      <Button className="w-[129px] h-9 bg-[#0b89ff] hover:bg-[#0b89ff]/90 text-white rounded-[30px] text-sm">
                        Portfolio
                      </Button>
                      <Button
                        variant="outline"
                        className="w-[84px] h-9 text-[#0b89ff] border-[#0b89ff] rounded-[30px] text-sm"
                      >
                        {service.id === 4 ||
                        service.id === 5 ||
                        service.id === 6 ||
                        service.id === 7 ||
                        service.id === 8
                          ? "Buy"
                          : "Order"}
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
          
          {/* Footer text */}
          <div className="flex items-center gap-4 mt-8 justify-end">
            <p className="font-['Raleway',Helvetica] font-medium text-white text-sm tracking-[3.72px] leading-5">
              CREATIVE SOLUTION
            </p>
            <div className="w-[60px] h-0.5 border-t border-white" />
          </div>
        </div>
      </section>
  );
};