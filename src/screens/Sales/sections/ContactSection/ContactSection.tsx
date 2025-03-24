import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Process steps data for mapping
const processSteps = [
  {
    number: "01.",
    title: "Make An Appointment",
    description: "Schedule a consultation with our team",
  },
  {
    number: "02.",
    title: "Meet Our Team",
    description: "Discuss your project requirements",
  },
  {
    number: "03.",
    title: "Get Consultation",
    description: "Receive expert advice and solutions",
  },
  {
    number: "04.",
    title: "Start Project",
    description: "Begin your digital transformation",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[120px] bg-[#001c6c] bg-[url(/section.png)] bg-cover bg-center">
      <div className="container mx-auto max-w-[1320px]">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-xl tracking-[1.00px] leading-[26px] mb-5">
            HOW WE WORK
          </h3>

          <h2 className="font-['Raleway',Helvetica] font-extrabold text-white text-[45px] leading-[51px] mb-5">
            Our Process For Delivering
            <br />
            Results
          </h2>

          <p className="font-['Barlow',Helvetica] font-normal text-white text-base leading-[22px] max-w-[700px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
            <br />
            industry&apos;s standard dummy text ever.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative mt-20">
          <div className="flex justify-between items-center">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex-1 px-4">
                <Card className="bg-gradient-to-tr from-[#001c6c] to-[#ff693b] border-none rounded-xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-white">
                      <div className="text-4xl font-bold mb-4">{step.number}</div>
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm opacity-80">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="absolute top-1/2 right-0 w-full h-[2px] bg-white/20 transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact button */}
        <div className="flex justify-center mt-20">
          <Button className="bg-[#ff693b] hover:bg-[#ff693b]/90 text-white font-semibold rounded h-11 px-[18px] py-3.5 shadow-[0px_1px_4px_#18203c14]">
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
};