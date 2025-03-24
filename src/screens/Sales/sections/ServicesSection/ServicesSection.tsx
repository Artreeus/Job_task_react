
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Service card data for mapping
const serviceCards = [
  {
    id: 1,
    title: "Why Chose Envobyte",
    subtitle: "Experienced & trustworthy",
    description:
      "We're experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
    imageSrc: "/group-159.png",
    bgColor: "bg-[#0a2c8c]",
    textColor: "text-white",
    subtitleColor: "text-[#64b4ff]",
    borderColor: "border-[#ffffff]",
  },
  {
    id: 2,
    title: "What's Your Benefit",
    subtitle: "No hassle with best price",
    description:
      "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
    imageSrc: "/clip-path-group-72.png", // Using one of the images as main image
    bgColor: "bg-[#ffffffbd]",
    textColor: "text-[#414141]",
    subtitleColor: "text-[#002aa2]",
    titleColor: "text-[#001246]",
    borderColor:
      "border-transparent [border-image:linear-gradient(180deg,rgba(232,229,229,1)_0%,rgba(255,255,255,1)_100%)_1]",
  },
  {
    id: 3,
    title: "What is Combo Offer",
    subtitle: "Get 9 services in one package",
    description:
      "You're getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
    imageSrc: "/-.svg",
    bgColor: "bg-[#ffffffbd]",
    textColor: "text-[#414141]",
    subtitleColor: "text-[#002aa2]",
    titleColor: "text-[#001246]",
    borderColor:
      "border-transparent [border-image:linear-gradient(180deg,rgba(232,229,229,1)_0%,rgba(255,255,255,1)_100%)_1]",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[38px] w-full py-16">
      {/* Section Header */}
      <div className="flex flex-col w-full max-w-[677px] items-center gap-4">
        <h3 className="font-['Raleway',Helvetica] font-semibold text-[#0b89ff] text-base text-center tracking-[3.84px] leading-6">
          MORE DETAILS
        </h3>
        <h2 className="font-['Inter',Helvetica] font-bold text-[#0a2c8c] text-5xl tracking-[0.96px] leading-6">
          Get Your Answers
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-5 w-full">
        {serviceCards.map((card) => (
          <Card
            key={card.id}
            className={`${card.bgColor} ${card.borderColor} border border-solid w-[369px] h-[535px] backdrop-blur-[36px] backdrop-brightness-[100%] rounded-none shadow-none`}
          >
            <CardContent className="flex flex-col items-center h-full p-0">
              {/* Card Image */}
              <div className="pt-[43px] pb-8 flex justify-center items-center h-[300px] w-full">
                {card.id === 1 && (
                  <div className="relative w-[254px] h-[257px] rounded-[22px]">
                    <img
                      className="absolute w-[209px] h-[204px] top-[30px] left-7"
                      alt="Service illustration"
                      src={card.imageSrc}
                    />
                  </div>
                )}

                {card.id === 2 && (
                  <div className="relative w-[285px] h-64">
                    <img
                      className="w-full h-full object-contain"
                      alt="Service illustration"
                      src={card.imageSrc}
                    />
                  </div>
                )}

                {card.id === 3 && (
                  <div className="relative w-[280.98px] h-[275.71px]">
                    <div className="relative w-[284px] h-[276px]">
                      <div className="absolute w-[281px] h-[276px] top-0 left-0">
                        <img
                          className="w-full h-full object-contain"
                          alt="Service illustration"
                          src={card.imageSrc}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-start px-6 py-0 w-full flex-grow">
                <h3
                  className={`w-full text-[30px] font-semibold leading-[36px] ${card.titleColor || card.textColor}`}
                >
                  {card.title}
                </h3>
                <div className="h-4" /> {/* Spacer */}
                <h4
                  className={`w-[263.53px] font-medium text-base leading-[22px] ${card.subtitleColor}`}
                >
                  {card.subtitle}
                </h4>
                <div className="h-6" /> {/* Spacer */}
                <p
                  className={`w-full font-normal text-base leading-[24px] ${card.textColor}`}
                >
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Button */}
      <Button className="w-[180px] h-11 bg-[#ff693b] rounded text-white font-normal text-base hover:bg-[#e55a30]">
        See Pricing
      </Button>
    </section>
  );
};
