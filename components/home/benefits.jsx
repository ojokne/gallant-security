import Image from "next/image";
import { Shield, Clock, Users, BadgeCheck } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Trained Professionals",
      description: "Our security personnel undergo rigorous training and certification"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock security services and rapid response times"
    },
    {
      icon: BadgeCheck,
      title: "Licensed & Insured",
      description: "Fully compliant with all state and federal regulations"
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Leading Businesses Trust Us
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 text-primary">
                    <benefit.icon className="h-6 w-6" />
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