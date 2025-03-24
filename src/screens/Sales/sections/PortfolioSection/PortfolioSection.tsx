import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PortfolioSection = (): JSX.Element => {
  // Team members data for mapping
  const teamMembers = [
    {
      id: 1,
      name: "Mr Anik",
      role: "Backend Developer",
      image: "/image-14.png",
    },
    {
      id: 2,
      name: "Mr Shahed",
      role: "Frontend Developer",
      image: "/image-15.png",
    },
    {
      id: 3,
      name: "Mr Mainul Islam",
      role: "SEO Expert",
      image: "/image-16.png",
    },
    {
      id: 4,
      name: "Mr Hasib",
      role: "Content Writer",
      image: "/image-17.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-[38px] py-10 px-4 md:container">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="font-['Raleway',Helvetica] font-semibold text-[#0b89ff] text-base tracking-[3.84px]">
          EXPERIENCED TEAM
        </div>

        <h2 className="font-['Inter',Helvetica] font-bold text-system-dark text-3xl md:text-5xl tracking-[0.96px]">
          Our Team Members
        </h2>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {teamMembers.map((member) => (
          <Card 
            key={member.id} 
            className="w-full h-[433px] rounded-none border-none relative overflow-hidden"
          >
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                alt={`${member.name} profile`}
                src={member.image}
              />
              <CardContent className="absolute bottom-0 left-0 right-0 flex flex-col w-full h-24 items-start justify-center gap-2.5 p-5 bg-[#0a2c8c]">
                <div className="flex flex-col w-full items-start gap-4">
                  <div className="self-stretch font-display-5-semi-bold text-[#ffffff] text-xl md:text-[length:var(--display-5-semi-bold-font-size)]">
                    {member.name}
                  </div>
                  <div className="self-stretch font-display-3-semi-bold text-[#ffffff] text-base md:text-[length:var(--display-3-semi-bold-font-size)]">
                    {member.role}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="w-[34px] h-[34px] border-[#0a2c8c] rounded-md p-0"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6 rotate-180"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-[34px] h-[34px] bg-[#ff693b] border-none rounded-md p-0"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </Button>
      </div>
    </section>
  );
};