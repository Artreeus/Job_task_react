import React from "react";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-[#00185c] bg-[url(/section.png)] bg-cover bg-center">
      <div className="container mx-auto px-4 py-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-white font-semibold text-sm tracking-wider uppercase mb-2">
            HOW WE WORK
          </p>
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-4">
            Our Process For Delivering
            <br className="hidden sm:block" />
            Results
          </h2>
          <p className="text-white text-base max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            <br className="hidden md:block" />
            industry's standard dummy text ever.
          </p>
        </div>

        {/* Process steps diagram - responsive version */}
        <div className="relative w-full mt-16 mb-16">
          {/* Desktop version */}
          <div className="hidden md:flex justify-center">
            <svg viewBox="0 0 1000 300" className="w-full max-w-5xl">
              {/* Dashed connecting lines with more spacing */}
              <path
                d="M150 100 C 250 100, 300 200, 400 200 C 500 200, 550 100, 650 100 C 750 100, 800 200, 850 200"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.7"
              />
              
              {/* Circle 1 - top position */}
              <g>
                <circle cx="150" cy="100" r="65" fill="url(#orangePurpleGradient)" />
                <text x="150" y="90" textAnchor="middle" fill="white" fontWeight="bold" fontSize="26">01.</text>
                <text x="150" y="115" textAnchor="middle" fill="white" fontSize="14">Make An</text>
                <text x="150" y="135" textAnchor="middle" fill="white" fontSize="14">Appointment</text>
              </g>
              
              {/* Circle 2 - bottom position */}
              <g>
                <circle cx="400" cy="200" r="65" fill="url(#orangePurpleGradient)" />
                <text x="400" y="190" textAnchor="middle" fill="white" fontWeight="bold" fontSize="26">02.</text>
                <text x="400" y="215" textAnchor="middle" fill="white" fontSize="14">Meet Our</text>
                <text x="400" y="235" textAnchor="middle" fill="white" fontSize="14">Team</text>
              </g>
              
              {/* Circle 3 - top position */}
              <g>
                <circle cx="650" cy="100" r="65" fill="url(#orangePurpleGradient)" />
                <text x="650" y="90" textAnchor="middle" fill="white" fontWeight="bold" fontSize="26">03.</text>
                <text x="650" y="115" textAnchor="middle" fill="white" fontSize="14">Get</text>
                <text x="650" y="135" textAnchor="middle" fill="white" fontSize="14">Consultation</text>
              </g>
              
              {/* Circle 4 - bottom position */}
              <g>
                <circle cx="850" cy="200" r="65" fill="url(#orangePurpleGradient)" />
                <text x="850" y="190" textAnchor="middle" fill="white" fontWeight="bold" fontSize="26">04.</text>
                <text x="850" y="215" textAnchor="middle" fill="white" fontSize="14">Start</text>
                <text x="850" y="235" textAnchor="middle" fill="white" fontSize="14">Project</text>
              </g>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="orangePurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff693b" />
                  <stop offset="100%" stopColor="#562c73" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Mobile version - stacked vertically */}
          <div className="md:hidden space-y-8">
            {/* Step 1 */}
            <div className="flex items-center justify-center flex-col">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff693b] to-[#562c73] flex items-center justify-center flex-col text-white mb-2">
                <p className="font-bold text-2xl">01.</p>
                <p className="text-sm">Make An</p>
                <p className="text-sm">Appointment</p>
              </div>
              <div className="h-12 border-l-2 border-white border-dashed opacity-70 my-1"></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-center justify-center flex-col">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff693b] to-[#562c73] flex items-center justify-center flex-col text-white mb-2">
                <p className="font-bold text-2xl">02.</p>
                <p className="text-sm">Meet Our</p>
                <p className="text-sm">Team</p>
              </div>
              <div className="h-12 border-l-2 border-white border-dashed opacity-70 my-1"></div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-center justify-center flex-col">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff693b] to-[#562c73] flex items-center justify-center flex-col text-white mb-2">
                <p className="font-bold text-2xl">03.</p>
                <p className="text-sm">Get</p>
                <p className="text-sm">Consultation</p>
              </div>
              <div className="h-12 border-l-2 border-white border-dashed opacity-70 my-1"></div>
            </div>
            
            {/* Step 4 */}
            <div className="flex items-center justify-center flex-col">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff693b] to-[#562c73] flex items-center justify-center flex-col text-white">
                <p className="font-bold text-2xl">04.</p>
                <p className="text-sm">Start</p>
                <p className="text-sm">Project</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#ff693b] hover:bg-[#ff693b]/90 text-white px-6 py-3 rounded text-sm font-medium transition">
            Contact Now
          </button>
        </div>
      </div>
      
      {/* Side text - only visible on larger screens */}
      <div className="hidden lg:flex absolute right-6 top-0 h-full items-center">
        <div className="transform -rotate-90 origin-center whitespace-nowrap">
          <p className="text-white tracking-widest uppercase text-xs font-medium">PROJECT IN PROGRESS</p>
        </div>
      </div>
    </section>
  );
};