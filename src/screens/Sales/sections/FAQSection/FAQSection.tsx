import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

// FAQ data for mapping
const faqItems = [
  {
    id: "01",
    question: "What Is Included In Your Web Development Service?",
    answer:
      "Our web development service includes website design, development, testing, deployment, and ongoing maintenance. We provide a full package, ensuring your site is user-friendly, responsive, and optimized for performance.",
    defaultOpen: false,
  },
  {
    id: "02",
    question: "What Technologies Do You Use For Web Development?",
    answer:
      "We use modern technologies such as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL to ensure your website is scalable, secure, and responsive.",
    defaultOpen: true,
  },
  {
    id: "03",
    question: "What If I Need Ongoing Support After The Website Is Launched?",
    answer:
      "We offer ongoing support after the website launch. Our support packages include updates, security patches, troubleshooting, and performance monitoring to keep your website running smoothly.",
    defaultOpen: false,
  },
  {
    id: "04",
    question: "Can I Customize My Website According To My Business Needs?",
    answer:
      "Yes, we provide full customization options. Whether it's design, functionality, or features, we can tailor your website to meet your specific business requirements and goals.",
    defaultOpen: false,
  },
  {
    id: "05",
    question: "Do You Offer SEO Services As Part Of Your Web Development?",
    answer:
      "Yes, we offer SEO services as part of our web development. We ensure that your website is optimized for search engines to help improve your visibility and ranking.",
    defaultOpen: false,
  },
];


export const FAQSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[42px] py-[52px] px-4 md:px-8 lg:px-[167px] bg-[#ffffff05]">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-[#0a2c8c] text-[48px] leading-[52px] text-center">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col w-full max-w-[938px] items-start gap-6">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-[#e1e3ec] last:border-b-0"
            >
              <div className="flex items-center gap-2.5 p-2.5">
                <div className="flex items-start justify-end">
                  <span className="font-[600] text-[18px] text-[#0a2c8c] leading-[24px]">
                    {item.id}
                  </span>
                </div>

                <div className="flex flex-col w-full bg-white rounded overflow-hidden">
                  <AccordionTrigger className="py-5 px-5 hover:no-underline">
                    <div className="flex justify-between items-center w-full">
                      <span className="font-semibold text-2xl text-left leading-[22px] text-[#6c748f] data-[state=open]:text-[#0a2c8c]">
                        {item.question}
                      </span>
                      {/* AccordionTrigger handles the icon state automatically */}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 pb-4">
                    {item.answer && (
                      <p className="font-normal text-2xl text-[#6d758f] leading-[34px] pt-0 pb-3.5">
                        {item.answer}
                      </p>
                    )}
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
