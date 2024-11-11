export function Stats() {
  const stats = [
    { number: "500+", label: "Clients Protected" },
    { number: "50+", label: "Security Professionals" },
    { number: "24/7", label: "Active Protection" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 