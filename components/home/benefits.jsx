import Image from "next/image";
import { Shield, Clock, Users, BadgeCheck } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Trained Professionals",
      description:
        "Our security personnel undergo rigorous training and certification",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock security services and rapid response times",
    },
    {
      icon: BadgeCheck,
      title: "Licensed & Insured",
      description: "Fully compliant with all state and federal regulations",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Leading Businesses Trust Us
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 group">
                  {/* <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full  flex items-center justify-center bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div> */}

                   <div className="relative flex-shrink-0">
                    {/* Animated background */}
                    <div className="absolute inset-0">
                      <div className="w-12 h-12 rounded-full bg-primary/50 animate-circle-pulse origin-center" />
                    </div>
                    {/* Static icon container */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative z-10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/security-team.jpg"
              alt="Our security team in action"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
