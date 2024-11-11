import Link from "next/link";
import { Shield, Users, Car, Calendar } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Security Guards",
      description: "Professional, trained security personnel for your property and events",
      href: "/services/security-guards"
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      description: "Regular patrol services to ensure your property is secure at all times",
      href: "/services/mobile-patrol"
    },
    {
      icon: Calendar,
      title: "Event Security",
      description: "Specialized security solutions for events of all sizes",
      href: "/services/event-security"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-muted-foreground">
            Tailored security services to protect what matters most to you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative overflow-hidden rounded-lg border bg-background p-8 hover:border-primary/50 transition-colors"
            >
              <div className="mb-4 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Link 
                href={service.href} 
                className="text-sm font-medium text-primary group-hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 