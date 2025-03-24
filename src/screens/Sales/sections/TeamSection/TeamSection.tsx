import { ExternalLinkIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

export const TeamSection = (): JSX.Element => {
  // Contact form fields data
  const formFields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Your Name",
      type: "text",
      half: true,
    },
    {
      id: "email",
      label: "Email",
      value: "support@envobyte.com",
      type: "email",
      half: true,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+1 (667) 777 2477",
      type: "tel",
      half: true,
    },
    {
      id: "company",
      label: "Company",
      value: "Envobyte",
      type: "text",
      half: true,
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Type your message here...",
      type: "textarea",
      half: false,
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      id: "business",
      title: "Business:",
      value: "support@envobyte.com",
      icon: "/bg.svg",
      innerIcon: "/sms.png",
      innerIconClass: "relative w-6 h-6 top-[11px] left-3 bg-[100%_100%]",
      blurColor: "bg-[#e4e4e480]",
    },
    {
      id: "whatsapp",
      title: "Whatsapp",
      value: "+1 (667) 777 2477",
      icon: "/whatsapp.svg",
      blurColor: "bg-[#25d366]",
    },
    {
      id: "linkedin",
      title: "Linkiedin",
      value: "www.linkedin.com/company/envobyte",
      icon: "/bg.svg",
      innerIcon: "/vuesax-linear-sms.png",
      innerIconClass: "absolute w-7 h-7 top-2.5 left-2.5",
      blurColor: "bg-[#2867b2]",
    },
  ];

  // Footer links data
  const footerColumns = [
    {
      title: "Company",
      links: ["About Us", "Privacy Policy", "Refund Policy"],
    },
    {
      title: "Learn More",
      links: ["Combo Offer", "Service Industries", "Envobyte Apps"],
    },
    {
      title: "Support",
      links: ["Contact Us", "FAQ", "Terms & Conditions"],
    },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/1727781105-facebook-svg.svg", alt: "Facebook" },
    { src: "/clip-path-group.png", alt: "Social Icon 1" },
    { src: "/clip-path-group-1.png", alt: "Social Icon 2" },
    { src: "/clip-path-group-2.png", alt: "Social Icon 3" },
    { src: "/link---image.png", alt: "Social Icon 4" },
  ];

  return (
    <section className="relative w-full py-16 bg-[#001655] overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-[306px] h-[590px] top-52 left-[568px] bg-[#0a3cc9] rounded-[153px/294.82px] blur-[132px]" />
      <div className="absolute w-[306px] top-[455px] left-[1288px] bg-[#0a3cc9] rounded-[153px/294.82px] h-[590px] blur-[132px]" />
      <div className="absolute inset-0 bg-[#18018221] backdrop-blur-[82px]" />
      <div className="absolute w-full h-px top-[728px] border-t border-[#e5e7eb33]" />
      <div className="absolute w-full bottom-0 bg-[#001142] blur-[97px]" />

     {/* Main content container */}
     <div className="relative flex flex-col lg:flex-row w-full container mx-auto items-center gap-8 z-10 px-4 lg:px-0">
        {/* Contact form */}
        <Card className="w-full lg:w-1/2 bg-[#0a2c8c33] rounded-lg border-[#e1e3ec26] shadow-[0px_1px_4px_#18203c14] backdrop-blur-[2.5px]">
          <CardContent className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {formFields.map((field) =>
                field.half ? (
                  <div key={field.id} className="flex flex-col gap-3">
                    <label className="font-display-2-semi-bold text-white">
                      {field.label}
                    </label>
                    <Input
                      defaultValue={field.value}
                      placeholder={field.placeholder}
                      className="px-4 py-[18px] bg-[#11329233] rounded-md border-[#f1f2f64c] shadow-neutral-shadow-02 text-[#ffffff80] font-display-2-regular"
                    />
                  </div>
                ) : null,
              )}
            </div>

            {/* Message textarea */}
            <div className="flex flex-col gap-3">
              <label className="font-display-2-semi-bold text-white">
                Message
              </label>
              <Textarea
                placeholder="Type your message here..."
                className="h-[92px] px-4 py-4 bg-[#11329233] rounded-md border-[#f1f2f64c] shadow-neutral-shadow-02 text-[#ffffff80] font-display-2-regular"
              />
            </div>

            {/* Send button */}
            <Button className="bg-[#ffffff1a] border-[#f1f3f74c] text-white hover:bg-[#ffffff30] shadow-[0px_1px_4px_#18203c14]">
              <span className="font-display-2-semi-bold">Send message</span>
              <img
                className="w-3 h-3 ml-1"
                alt="Arrow right"
                src="/line-rounded-arrow-rigth.svg"
              />
            </Button>
          </CardContent>
        </Card>

        {/* Right side content */}
        <div className="flex flex-col h-auto lg:h-[419px] items-start w-full lg:flex-1 mt-8 lg:mt-0">
          <h2 className="font-display-9-extra-bold text-white mb-4 text-2xl lg:text-[unset]">
            Let us know what
            <br />
            you think!
          </h2>

          <p className="font-paragraph-medium-regular text-white mb-6">
            Got something on your mind? Share it with us! Drop a<br />
            message, and we&apos;ll respond quickly to assist you
          </p>

          {/* Contact information */}
          <div className="space-y-4 w-full">
            {contactInfo.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="flex items-center gap-4">
                  <div className="relative w-[46px] h-[46px]">
                    <div className="absolute w-[46px] h-[46px] top-0 left-0">
                      <div className="h-[46px] rounded-[3px]">
                        {item.blurColor === "bg-[#e4e4e480]" ? (
                          <div className="relative w-[34px] h-[34px] top-1.5 left-1.5 bg-[#e4e4e480] rounded-[17px] blur-[5px]" />
                        ) : item.blurColor === "bg-[#25d366]" ? (
                          <div className="w-5 h-5 top-[13px] left-[13px] bg-[#25d366] rounded-[14px] relative blur-[5px]" />
                        ) : (
                          <div className="w-7 h-7 top-2.5 left-[9px] bg-[#2867b2] rounded-[17px] relative blur-[5px]" />
                        )}
                      </div>
                    </div>
                    <div className="absolute w-[46px] h-[46px] top-0 left-0">
                      {item.id === "whatsapp" ? (
                        <img
                          className="absolute w-[47px] h-[47px] top-0 left-0"
                          alt="Whatsapp"
                          src="/whatsapp.svg"
                        />
                      ) : (
                        <div className="h-[46px]">
                          <div className="relative w-[47px] h-[47px] bg-[url(/bg.svg)] bg-[100%_100%]">
                            {item.innerIcon && (
                              <img
                                className={item.innerIconClass}
                                alt={item.title}
                                src={item.innerIcon}
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-display-2-regular text-white">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-display-3-semi-bold text-white">
                        {item.value}
                      </span>
                      <ExternalLinkIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                {index < contactInfo.length - 1 && (
                  <Separator className="w-full lg:w-[341px] h-px bg-transparent my-4">
                    <img
                      className="w-full h-px object-cover"
                      alt="Divider"
                      src="/divider-3.svg"
                    />
                  </Separator>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full mt-32 pt-16 pb-8 bg-[#001142] z-10">
        <div className="max-w-[1520px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company logo and description */}
            <div className="col-span-1">
              <div className="relative w-[123px] h-[35px] mb-6">
                <div className="absolute w-[18px] h-[29px] top-0 left-0">
                  <img
                    className="absolute w-[13px] h-[22px] top-[7px] left-[5px]"
                    alt="Vector"
                    src="/vector-159.svg"
                  />
                  <div className="absolute w-2 h-[9px] top-0 left-0">
                    <div className="h-[9px]">
                      <div className="relative w-2 h-[9px]">
                        <img
                          className="absolute w-1 h-1 top-[5px] left-1"
                          alt="Group"
                          src="/group-8.png"
                        />
                        <img
                          className="absolute w-[3px] h-[3px] top-px left-0"
                          alt="Group"
                          src="/group-9.png"
                        />
                        <img
                          className="absolute w-0.5 h-0.5 top-0 left-1.5"
                          alt="Group"
                          src="/group-10.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute w-3.5 h-4 top-[13px] left-5"
                  alt="Vector"
                  src="/vector-166.svg"
                />
                <div className="absolute w-8 h-[18px] top-3 left-[34px]">
                  <img
                    className="absolute w-[15px] h-4 top-px left-0"
                    alt="Vector"
                    src="/vector-156.svg"
                  />
                  <img
                    className="absolute w-[18px] h-[18px] top-0 left-[15px]"
                    alt="Group"
                    src="/group-6.png"
                  />
                </div>
                <img
                  className="absolute w-3.5 h-[22px] top-[13px] left-[82px]"
                  alt="Vector"
                  src="/vector-157.svg"
                />
                <img
                  className="absolute w-[9px] h-[22px] top-[7px] left-[97px]"
                  alt="Vector"
                  src="/vector-20.svg"
                />
                <img
                  className="absolute w-4 h-4 top-[13px] left-[107px]"
                  alt="Vector"
                  src="/vector-21.svg"
                />
                <img
                  className="absolute w-3.5 h-[22px] top-[7px] left-[67px]"
                  alt="Group"
                  src="/group-7.png"
                />
              </div>
              <p className="text-white text-base leading-6 font-['Roboto',Helvetica]">
                We are an IT Company. We help
                <br />
                businesses to bring ideas to life
                <br />
                easily and affordably.
              </p>
            </div>

            {/* Footer columns */}
            {footerColumns.map((column, index) => (
              <div key={index} className="col-span-1">
                <h3 className="font-bold text-lg leading-[27px] text-white font-['Raleway',Helvetica] mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-6">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="h-6">
                      <a
                        href="#"
                        className="font-normal text-base leading-6 text-white font-['Roboto',Helvetica]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get in Touch column */}
            <div className="col-span-1">
              <h3 className="font-bold text-lg leading-[27px] text-white font-['Raleway',Helvetica] mb-4">
                Get in Touch
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-[url(/image-3.png)] bg-cover bg-[50%_50%]" />
                <span className="font-normal text-base leading-6 text-white font-['Roboto',Helvetica]">
                  support@envobyte.com
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-[url(/whatsapp-svg.svg)] bg-[100%_100%]" />
                <span className="font-normal text-base leading-6 text-white font-['Roboto',Helvetica]">
                  +1 (667) 777 2477
                </span>
              </div>

              <div className="flex gap-4">
                {socialIcons.map((icon, index) => (
                  <a key={index} href="#" className="w-[30px] h-[30px]">
                    <div
                      className="w-[30px] h-[30px] bg-[url(${icon.src})] bg-[100%_100%]"
                      aria-label={icon.alt}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-8 border-t border-[#e5e7eb1a]" />

          <div className="text-center">
            <p className="font-bold text-sm text-white font-['Roboto',Helvetica]">
              @2025 - ENVOBYTE, All rights are reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};