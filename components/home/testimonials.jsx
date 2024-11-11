import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Solutions Inc.",
      image: "/testimonials/client1.jpg",
      quote: "Exceptional service and professionalism. Their team has been instrumental in securing our facilities."
    },
    // Add more testimonials...
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-8 rounded-lg border bg-muted/50">
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
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-muted-foreground">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 