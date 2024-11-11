"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Testimonials() {
  const scrollContainerRef = useRef(null);
  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Solutions Inc.",
      image: "/testimonials/client1.jpg",
      quote:
        "Exceptional service and professionalism. Their team has been instrumental in securing our facilities.",
    },
    {
      name: "John Clever",
      company: "Tech Solutions Inc.",
      image: "/testimonials/client1.jpg",
      quote:
        "Exceptional service and professionalism. Their team has been instrumental in securing our facilities.",
    },
    {
      name: "John Jack",
      company: "Tech Solutions Inc.",
      image: "/testimonials/client1.jpg",
      quote:
        "Exceptional service and professionalism. Their team has been instrumental in securing our facilities.",
    },
    {
      name: "John James",
      company: "Tech Solutions Inc.",
      image: "/testimonials/client1.jpg",
      quote:
        "Exceptional service and professionalism. Their team has been instrumental in securing our facilities.",
    },
    {
      name: "John Claus",
      company: "Tech Solutions Inc.",
      image: "/testimonials/client1.jpg",
      quote:
        "Exceptional service and professionalism. Their team has been instrumental in securing our facilities.",
    },
    {
      name: "John Paul",
      company: "Tech Solutions Inc.",
      image: "/testimonials/client1.jpg",
      quote:
        "Exceptional service and professionalism. Their team has been instrumental in securing our facilities.",
    },
    // Add more testimonials...
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        {/* Scroll Container with Navigation */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on Mobile */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-background border shadow-sm z-10 hidden md:flex items-center justify-center hover:bg-muted transition-colors group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-background border shadow-sm z-10 hidden md:flex items-center justify-center hover:bg-muted transition-colors group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex-none w-[300px] md:w-[400px] snap-center p-8 rounded-lg border bg-muted/50 transition-transform hover:scale-[1.02] duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator for Mobile */}
          <div className="mt-4 text-sm text-center text-muted-foreground md:hidden">
            Swipe to see more
          </div>
        </div>
      </div>
    </section>
  );
}

