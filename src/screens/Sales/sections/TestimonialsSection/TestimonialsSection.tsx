import { StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Stephanie Powell",
    platform: "fiverr",
    avatar: "/ellipse-587.svg",
    text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
  },
  {
    id: 2,
    name: "Brian Clark",
    platform: "upwork",
    avatar: "/ellipse-585.svg",
    text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
  },
  {
    id: 3,
    name: "Christopher White",
    platform: "upwork",
    avatar: "/ellipse-586.svg",
    text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
  },
  {
    id: 4,
    name: "Brian Clark",
    platform: "fiverr",
    avatar: "/ellipse-585.svg",
    text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
  },
  {
    id: 5,
    name: "Christopher White",
    platform: "upwork",
    avatar: "/ellipse-586.svg",
    text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
  },
  {
    id: 6,
    name: "Stephanie Powell",
    platform: "fiverr",
    avatar: "/ellipse-587.svg",
    text: '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[984px] items-center gap-[38px] mx-auto py-16">
      <div className="flex flex-col items-center gap-[52px] w-full">
        <div className="flex flex-col w-full max-w-[677px] items-center gap-4 mx-auto">
          <h3 className="[font-family:'Raleway',Helvetica] font-semibold text-[#0b89ff] text-base text-center tracking-[3.84px] leading-6">
            CLIENT REVIEWS
          </h3>

          <h2 className="[font-family:'Inter',Helvetica] font-bold text-system-dark text-5xl tracking-[0.96px] leading-6">
            Our Proud Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-[#ffffff80] backdrop-blur-[2px] backdrop-brightness-[100%] border-none"
            >
              <CardContent className="flex flex-col items-start gap-2.5 pt-6 pb-[27px] px-6">
                <div className="flex flex-col items-start w-full">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-6 h-6 fill-current text-yellow-500"
                      />
                    ))}
                  </div>

                  <div className="mt-4 self-stretch [font-family:'Inter',Helvetica] font-normal text-[#414141] text-sm leading-[22px]">
                    {testimonial.text}
                  </div>

                  <div className="flex items-center mt-4">
                    <img
                      className="w-[50px] h-[50px]"
                      alt={`${testimonial.name} avatar`}
                      src={testimonial.avatar}
                    />

                    <div className="flex flex-col items-start gap-2 ml-2">
                      <div className="font-medium text-[#0a2c8c] text-lg leading-6 [font-family:'Inter',Helvetica]">
                        {testimonial.name}
                      </div>

                      <div className="flex items-center gap-1">
                        {testimonial.platform === "fiverr" ? (
                          <img
                            className="w-4 h-4"
                            alt="Symbol darkgreen"
                            src="/symbol---darkgreen.svg"
                          />
                        ) : (
                          <img
                            className="w-4 h-4"
                            alt="Upwork icon"
                            src="/upwork-icon-png-2.png"
                          />
                        )}

                        <div className="text-[#0012464c] text-[14px] leading-[20px] font-display-2-regular">
                          From {testimonial.platform}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-[34px] h-[34px] rounded-md border border-solid border-[#0a2c8c] flex items-center justify-center">
          <img
            className="w-6 h-6 rotate-180"
            alt="Previous"
            src="/chevron-up.svg"
          />
        </button>

        <button className="w-[34px] h-[34px] rounded-md bg-[#ff693b] flex items-center justify-center">
          <img className="w-6 h-6" alt="Next" src="/chevron-up-1.svg" />
        </button>
      </div>
    </section>
  );
};
