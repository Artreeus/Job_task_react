import * as React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

type CarouselProps = {
  opts?: EmblaOptionsType;
  plugins?: any[];
  className?: string;
  children: React.ReactNode;
  autoplay?: boolean;
};                  

export function Carousel({
  opts = {},
  plugins = [],
  className,
  children,
  autoplay = false,
}: CarouselProps) {
  const autoplayOptions = React.useMemo(
    () => (autoplay ? [Autoplay({ delay: 4000 })] : []),
    [autoplay],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...opts,
      loop: true,
    },
    [...plugins, ...autoplayOptions],
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-md border border-[#0a2c8c]"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 rounded-md bg-[#ff693b]"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}